import React, { useState, useEffect } from "react";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
//Importação para utilizar a função áudio
import { Audio } from "expo-av";

import Texto from "./src/componentes/Texto.js"
import Produto from "./src/telas/produtos";
import SobreNos from "./src/telas/sobre_nos";
import Catalogo from "./src/telas/catalogo";

import Mocks from "./src/mocks/produto";
import MocksCard from "./src/mocks/catalogo";

function MenuKit() {
  return <View>
    <Produto {...Mocks} />
  </View>
}

function PagProduto() {
  return <View>
    <Catalogo {...MocksCard} />
  </View>
}

function MenuAudio() {
  //Áudio para o APP
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/musica/acdc_highway_to_hell.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
    <Texto>🎧 On/Off</Texto>
  </TouchableOpacity>
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Kit") {
            iconName = focused
              ? 'medkit'
              : 'medkit-outline';
          } else if (route.name === "Produtos") {
            iconName = focused
              ? 'list'
              : 'list-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused
              ? 'heart'
              : 'heart-outline';
          } else if (route.name === "Sobre nós") {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#3c5712',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}>
    <Tab.Screen name='Produtos' component={PagProduto} />
    <Tab.Screen name='Kit' component={MenuKit} />
    <Tab.Screen name='Lista de Desejos' component={MenuKit} />
    <Tab.Screen name='Sobre nós' component={SobreNos} />
  </Tab.Navigator>
}

export default function App() {
  let [fonteCarregada] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  //Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />;
  }

  return <NavigationContainer>
    <TabsMenu />
    <MenuAudio/>
  </NavigationContainer>
}