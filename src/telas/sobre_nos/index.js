import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import Mocks from "../../mocks/sobre_nos";

export default function SobreNos() {
    return <ScrollView style={styles.tela}>
        <View style={styles.containerImg}>
            <Image source={Mocks.elementos.logo} style={styles.logo} resizeMode='contain'></Image>
        </View>
        <Texto style={styles.historia}> {Mocks.elementos.historia} </Texto>
        <Image source={Mocks.elementos.imagem} style={styles.loja} resizeMode='contain'></Image>
    </ScrollView>
}
