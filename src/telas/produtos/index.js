import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";


//import uma fonte diferente do Google Fonts
//npx expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Produto({ topo, detalhes, itens }) {
    return <FlatList
        style={styles.fundo}
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.id}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <Detalhes {...detalhes} />
            </>
        }}
    />
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "white",
    },
});
