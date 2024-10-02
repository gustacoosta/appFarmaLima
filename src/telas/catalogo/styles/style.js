import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tela: {
        alignItems: "center",
        backgroundColor: "#ADFF2F",
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 26,
        color: "black",
        padding: 16,
    },
    preco: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 12,
    },
    lista: {
        marginTop: 60,
    },
    container: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 0,
    },
    tituloCard: {
        height: 80,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        color: "black",
        padding: 5,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 15,
        color: "black",
        padding: 5,
        minHeight: 90,
    },
    imgProd: {
        borderRadius: 20,
        height: 200,
        width: 190
    },
    imgModal: {
        borderRadius: 20,
        height: 200,
        width: 200,
    },
    modalView: {
        margin: 20,
        marginTop: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 25,
    },
    button: {
        borderRadius: 20,
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        elevation: 2,
        backgroundColor: '#ADFF2F',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    cardbtt: {
        backgroundColor: 'white',
    },
});
