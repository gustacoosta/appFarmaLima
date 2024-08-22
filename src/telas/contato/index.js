import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Camera } from 'expo-camera';

import Texto from "../../componentes/Texto";
import styles from "./styles/style";

export default function Contato() {
    const [selectedValue, setSelectedValue] = useState("");
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            console.log(photo.uri); 
            setImageUri({ uri: photo.uri });
            setIsCameraVisible(false);
        }
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
                <TextInput style={styles.input} placeholder="Nome..." />

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

                <Texto style={styles.texto}>Foto: </Texto>
                {isCameraVisible ? (
                    <Camera style={{ flex: 1, width: '100%', height: 300 }} ref={ref => setCameraRef(ref)}>
                        <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                            <Text style={styles.bttCamera}>Tirar Foto</Text>
                        </TouchableOpacity>
                    </Camera>
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

                <Texto style={styles.texto}>Descrição: </Texto>
                <TextInput style={styles.input} placeholder="Descrição..." multiline />
            </View>
        </ScrollView>
    );
}
