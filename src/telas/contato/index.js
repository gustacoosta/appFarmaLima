import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Camera } from 'expo-camera';
import axios from 'axios'; // Importar Axios

import Texto from "../../componentes/Texto";
import styles from "./styles/style";

export default function Contato() {
    const [selectedValue, setSelectedValue] = useState("");
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null); 
    const [description, setDescription] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Função para buscar o endereço usando a API do ViaCEP
    const buscarEndereco = async () => {
        if (cep.length !== 8) {
            Alert.alert('Erro', 'Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                Alert.alert('Erro', 'CEP não encontrado.');
                setEndereco(null);
            } else {
                setEndereco(response.data);
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao buscar o endereço. Tente novamente.');
        }
    };

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            console.log(photo.uri);
            setImageUri({ uri: photo.uri });
            setIsCameraVisible(false);
        }
    };

    const handleSubmit = () => {
        if (!name || !email || !selectedValue || !cep) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }
    
        // Exemplo de validação de email (simples)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return;
        }
    
        // Aqui você pode adicionar o código para enviar os dados do formulário
        Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
    
        // Limpar os campos após o envio
        setName('');
        setEmail('');
        setCep('');
        setSelectedValue('');
        setEndereco(null); // Limpar o endereço preenchido
        setDescription('');
        setImageUri(null); // Limpar a foto, se for necessário
    };
    

    if (hasPermission === null) {
        return <Text>Solicitando permissão da câmera...</Text>;
    }

    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.tela}>
                <Texto style={styles.texto}>Nome: </Texto>
                <TextInput
                    style={styles.input}
                    placeholder="Nome..."
                    value={name}
                    onChangeText={setName}
                />

                <Texto style={styles.texto}>E-mail: </Texto>
                <TextInput
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="user@dominio.com"
                    value={email}
                    onChangeText={setEmail}
                />

                <Texto style={styles.texto}>CEP: </Texto>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o CEP..."
                    value={cep}
                    onChangeText={setCep}
                    keyboardType="numeric"
                    maxLength={8}
                    onBlur={buscarEndereco} // Busca o endereço quando o campo perde o foco
                />

                {endereco && (
                    <>
                        <Texto style={styles.texto}>Endereço: {endereco.logradouro}</Texto>
                        <Texto style={styles.texto}>Bairro: {endereco.bairro}</Texto>
                        <Texto style={styles.texto}>Cidade: {endereco.localidade}</Texto>
                        <Texto style={styles.texto}>Estado: {endereco.uf}</Texto>
                    </>
                )}

                <Texto style={styles.texto}>Tipo de Contato:</Texto>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Devolução" value="devolucao" />
                    <Picker.Item label="Sugestão" value="sugestao" />
                    <Picker.Item label="Outro" value="outro" />
                </Picker>

                <View style={styles.fotoContainer}>
                    <Texto style={styles.texto}>Foto: </Texto>
                    {isCameraVisible ? (
                        <View style={styles.cameraWrapper}>
                            <Camera style={styles.camera} ref={ref => setCameraRef(ref)}>
                                <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                                    <Text style={styles.bttCamera}>⭕ Tirar Foto</Text>
                                </TouchableOpacity>
                            </Camera>
                        </View>
                    ) : (
                        <>
                            {imageUri ? (
                                <Image source={imageUri} style={styles.profileImage} resizeMode="contain" />
                            ) : (
                                <Texto style={styles.texto}>Nenhuma foto selecionada</Texto>
                            )}
                            <TouchableOpacity onPress={() => setIsCameraVisible(true)}>
                                <Texto style={styles.botaoContato}>📷</Texto>
                            </TouchableOpacity>
                        </>
                    )}
                </View>

                <Texto style={styles.texto}>Descrição: </Texto>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição..."
                    multiline
                    value={description}
                    onChangeText={setDescription}
                />

                <TouchableOpacity style={styles.botaoEnviar} onPress={handleSubmit}>
                    <Texto>Enviar</Texto>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
