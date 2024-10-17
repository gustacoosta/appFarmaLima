import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listaContainer: {
        flex: 1,
        height: 100,
        width: '100%',
        backgroundColor: "#ADFF2F",
        alignItems: 'center'
    },
    cardContainer: {
        width: 400,
        height: 170, 
    },
    contentContainer: {
        flexDirection: 'row',          
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 5,   
    },
    infoContainer: {
        flexDirection: 'row',         
        alignItems: 'left',         
    },
    imagem: {
        width: 100,                    
        height: 100,
        marginRight: 5,               
    },
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 5,  
        marginBottom: 10,  
    },
    nomeProduto: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 4,
        textAlign: "left", 
        marginTop: 30,            
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 5,
        margin: 5,
    }, 
    lista: {
        height: 100,
        paddingTop: 20,
        paddingBottom: 20,
    },
});
