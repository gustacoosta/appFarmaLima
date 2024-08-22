import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    },
    tela: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    input: {
        marginBottom: 12,
        padding: 12,
        backgroundColor: '#f5f5eb',
        borderRadius: 6,
        fontSize: 16,
        color: '#333',
    },
    picker: {
        marginBottom: 12,
        paddingVertical: 8,
        backgroundColor: '#f5f5eb',
        borderRadius: 6,
    },
    texto: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    botaoContato: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ADFF2F',
        alignSelf: 'center',
    },
    bttCamera: {
        backgroundColor: '#ffffe0',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    fotoContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    cameraWrapper: {
        width: 300,
        height: 250,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-end', 
    },
    camera: {
        flex: 1,
    },
    cameraButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    profileImage: {
        width: 300,
        height: 250,
        borderRadius: 8,
    },
    botaoEnviar: {
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
