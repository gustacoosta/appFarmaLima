import React, {useState, useEffect} from 'react';
import { Alert, FlatList , View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import ListaItem from "./listaItem";

import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import Botao from "../../componentes/Botao";

export default function ListaDesejos() {

    const [listData, setListData] = useState([]);

    //Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, [])

    const navigation = useNavigation();

    //Função para limpar a lista de desejos
    const clearAsyncStorage = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert('Lista de desejos foi excluída com sucesso.');
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }

    return <View style={styles.listaContainer}>
        <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua lista de desejos.</Texto>
        <FlatList
            style={styles.lista}
            data={listData}
            renderItem={({item})=> <ListaItem {...item}/>} 
            keyExtractor={(item) => item.id} 
            numColumns={1}
        />
        <Botao textoBotao={"Apagar Lista"} clickBotao={()=> clearAsyncStorage()} ></Botao>
    </View>
}