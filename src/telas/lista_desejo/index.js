import React, {useState, useEffect} from 'react';
import { FlatList , View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListaItem from "./listaItem";

import Texto from "../../componentes/Texto";
import styles from "./styles/style";

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

    //Carreha a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, [])

    return <View style={styles.listaContainer}>
        <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua lista de desejos.</Texto>
        <FlatList
            style={styles.lista}
            data={listData}
            renderItem={({item})=> <ListaItem {...item}/>} 
            keyExtractor={((item) => item.id)} 
            numColumns={2}
        />
    </View>
}