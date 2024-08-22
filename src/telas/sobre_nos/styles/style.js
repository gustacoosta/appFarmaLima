import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tela: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "antiquewhite",
    },
    containerImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    historia: {
        textAlign: "justify",
        fontSize: 16,
        color: "black",
        paddingBottom: "none",
    },
    loja: {
        width: "100%",
        height: 400,
        marginTop: 10,
        padding: 0,
    },
    logo: {
        width: 200,
        height: 200,
    },
    video: {
        width: "100%",
        padding: 90,
        marginBottom: 30,
    }, 
    botaoContato: {
        alignItems: 'center',
        width: 150,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        fontSize: 15,
        fontWeight: 'bold',
        elevation: 2,
        backgroundColor: '#ADFF2F',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
});
