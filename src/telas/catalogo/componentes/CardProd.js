import React, { useState } from 'react';
import { TouchableOpacity, Modal, Pressable, View, Image, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../styles/style";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Texto from "../../../componentes/Texto"

export default function CardProd({ item: { id, titulo, descricao, imagem, preco } }) {
    const [modalVisible, setModalVisible] = useState(false);

    async function addListaDesejos(id, titulo, imagem) {
        // Produto favoritado
        const addProduto = [{
            id: id,
            titulo: titulo,
            imagem: imagem
        }];

        // Verifique se a lista esta vazia
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if (listaDesejosSalva == null) {
            //Lista vazia, insere o produto clicado
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("O produto foi inserido com sucesso na Lista de Desejos!");
            console.log("Produto adicionado na Lista de Desejos");
            console.log(listaDesejosAtualizada);
        } else {
            //A lista já possui itens
            const listaDesejos = JSON.parse(listaDesejosSalva);
            console.log(listaDesejos);
            // await AsyncStorage.clear();
            //Insere mais um produto na lista
            listaDesejos.push({id:id, titulo:titulo, imagem:imagem});

            //Converte um array para string 
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);

            //Insere o asyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("O produto foi inserido com sucesso na Lista de Desejos!");
            console.log("Mais um produto adicionado na Lista de Desejos");
            console.log(listaDesejosAtualizada);
        }
    }

    return <View style={styles.card}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Card style={styles.container}>

                <Texto variant="titleLarge" style={styles.tituloCard}>{titulo}</Texto>
                <Card.Cover style={styles.imgProd} source={imagem} />

                <Card.Actions>
                    <TouchableOpacity onPress={() => addListaDesejos(id, titulo, imagem)}>
                        <Ionicons name="heart" size={25} color='red' />
                    </TouchableOpacity>
                </Card.Actions>
            </Card>
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
                <Texto style={styles.tituloCard}>{titulo}</Texto>
                <Image style={styles.imgModal} source={imagem}></Image>
                <Texto style={styles.descricao}>{descricao}</Texto>
                <Texto style={styles.preco}>{preco}</Texto>
                <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                    <Texto>Fechar</Texto>
                </Pressable>
            </View>
        </Modal>
    </View>
}