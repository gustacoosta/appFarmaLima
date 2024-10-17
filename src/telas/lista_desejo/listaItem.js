import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Texto from "../../componentes/Texto";
import Botao from "../../componentes/Botao";
import styles from "./styles/style";


export default function ListaItem({ id, titulo, imagem }) {

    
    const navigation = useNavigation();
    //Função para apagar item da lista
    async function removeProdListaDesejos(id) {
        //Captura a lista de desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista de desejos em array
        const listaDesejos = JSON.parse(listaDesejosSalva);
        
        // Exclui o item e transforma em string para atualizar o AsyncStorage
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !== id));

        // Atualiza o AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produto removido da lista de desejos.");
        console.log('produto removido');
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});

    };

    return (
        <View style={styles.cardContainer}>
            <Card mode='contained' style={styles.card}>
                <Card.Content style={styles.contentContainer}>
                    <View style={styles.infoContainer}>
                        <Card.Cover source={imagem} style={styles.imagem} />
                        <Texto style={styles.nomeProduto}>{titulo}</Texto>
                    </View>
                    <TouchableOpacity onPress={()=> removeProdListaDesejos(id)}>
                        <Ionicons name="trash" size={25} color='#497A00' />
                    </TouchableOpacity> 
                </Card.Content>
            </Card>
        </View>
    );
}
