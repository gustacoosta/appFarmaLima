import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listaContainer: {
        flex: 1,
        height: 100,
    },
    cardContainer: {
        width: '50%',
        height: 170,
    },
    imagem: {
        width: "60%",
        height: "60%",
        alignSelf: "center",
    },
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "green",
    },
    nomeProduto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 10,
        margin: 5,
    }, 
    lista: {
        height: 100,
        padding: 0,
        margin: 0,
    }
});
