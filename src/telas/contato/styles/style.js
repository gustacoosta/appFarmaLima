import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    tela: {
        flex: 1,
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "antiquewhite",
        height: '100%',
    },
    input: {
        marginBottom: 10,
        padding: 12,
        backgroundColor: '#f5f5eb',
        borderRadius: 4,
        fontSize: 16,
    },
    picker: {
        marginBottom: 10,
        paddingVertical: 8,
        backgroundColor: '#f5f5eb',
        borderRadius: 4,
    },
    texto: {
        fontSize: 16,
        marginBottom: 8,
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
