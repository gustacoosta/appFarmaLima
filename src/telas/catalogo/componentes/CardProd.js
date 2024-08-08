import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, Pressable, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../styles/style";

import Texto from "../../../componentes/Texto"

export default function CardProd({ item: { titulo, descricao, imagem, preco} }) {
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={styles.card}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Card>
                <Card.Content style={styles.container}>
                    <Texto variant="titleLarge" style={styles.tituloCard}>{titulo}</Texto>
                    <Texto variant="bodyMedium" style={styles.descricao}>{descricao}</Texto>
                </Card.Content>
                <Card.Cover style={styles.imgProd} source={imagem} />
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