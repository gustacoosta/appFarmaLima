import React from "react";
import { View , TouchableOpacity} from "react-native";
import { Card } from "react-native-paper";
import {Icon} from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Texto from "../../componentes/Texto";

import styles from "./styles/style";


export default function ListaItem({id, titulo, imagem}){
    return <View style={styles.cardContainer}>
        <Card mode='contained' style={styles.card}>
            <Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}/>
                <Texto style={styles.nomeProduto}>{titulo}</Texto>
            </Card.Content>
        </Card>
    </View>
}