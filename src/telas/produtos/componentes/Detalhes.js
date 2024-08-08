import React from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';

import Texto from "../../../componentes/Texto" //componente de exibição de texto
import Botao from "../../../componentes/Botao"

//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Detalhes({ logo, nome, detalhe, preco, botao }) {
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}> {detalhe} </Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao textoBotao={botao} clickBotao={() => { Alert.alert("Carrinho de compras", "Este produto será adicionado ao seu carrinho de compras.") }} />
    </View>
}

const styles = StyleSheet.create({
    produto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "white"
    },
    nome: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 25,
        color: "purple",
        paddingTop: 10,
        paddingLeft: 2,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        color: "black",
    },
    preco: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
        color: "black",
    },
    logo: {
        width: 50,
        height: 75
    },
    logotipo: {
        flexDirection: 'row',
        paddingVertical: 5,
        width: "100%"
    },

});