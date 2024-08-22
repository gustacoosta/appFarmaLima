import React from 'react';
import { Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import Mocks from "../../mocks/sobre_nos";



export default function SobreNos() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.tela}>
            <View style={styles.containerImg}>
                <Image source={Mocks.elementos.logo} style={styles.logo} resizeMode='contain' />
            </View>
            <Texto style={styles.historia}> {Mocks.elementos.historia} </Texto>
            <Image source={Mocks.elementos.imagem} style={styles.loja} resizeMode='contain' />
            <Texto style={styles.historia}> {Mocks.elementos.intro_vid} </Texto>
            <Video
                ref={video}
                style={styles.video}
                source={require('../../../assets/videos/video_farmacia.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity style={styles.botaoContato} onPress={() => navigation.navigate('Contato')}>
                <Texto >Entre em Contato</Texto>
            </TouchableOpacity>
        </ScrollView>
    );
}
