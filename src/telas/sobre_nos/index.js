import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import Mocks from "../../mocks/sobre_nos";

export default function SobreNos() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return <ScrollView style={styles.tela}>
        <View style={styles.containerImg}>
            <Image source={Mocks.elementos.logo} style={styles.logo} resizeMode='contain'></Image>
        </View>
        <Texto style={styles.historia}> {Mocks.elementos.historia} </Texto>
        <Image source={Mocks.elementos.imagem} style={styles.loja} resizeMode='contain'></Image>
        <Texto style={styles.historia}> {Mocks.elementos.intro_vid} </Texto>
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'https://www.tiktok.com/@paulosamn/video/7232847320759438597',
              }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />

    </ScrollView>
}
