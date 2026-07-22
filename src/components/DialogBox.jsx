import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';


const DialogBox = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.Container}>
            <Text style={styles.HeaderText}>DialogBox</Text>
            <TouchableOpacity
                style={styles.OpenButton}
                onPress={() =>
                    setModalVisible(true)
                }
            >
                <Text style={styles.ButtonText}>
                    Show Model
                </Text>
            </TouchableOpacity>
            <Modal 
            visible= {modalVisible}
            animationType='fade'
            transparent={true}
            onRequestClose={()=>setModalVisible(false)} // This is Using for SafeSide... Sometimes in "Ios" close button couldn't workout
            >
                <View style={styles.ModalOverlay}>
                    <View style={styles.ModalView}>
                        <Text style={styles.ModalTitle}>Beautifull Modal</Text>
                        <Text style={styles.ModalText}>This is Beautifull Modal</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.CloseButton}>
                            <Text style={styles.CloseButtonText}>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    HeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        backgroundColor: '#03dace',
        paddingVertical: 50,
        borderRadius: 30,
        // marginTop:10
        paddingTop: 50,
    },
    OpenButton: {
        backgroundColor: '#03dace',
        padding:10,
        borderRadius: 20,
        // marginLeft:270,
        marginHorizontal:140,
        marginTop:290,
        elevation: 5,
        // marginVertical:50,
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
    ModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    ModalView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5
    },
    ModalTitle: {
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10,
        color:'#333'
    },
    ModalText:{
        fontSize:16,
        marginBottom:20,
        // justifyContent:'center',
        textAlign:'center',
        color:'#555'
    },
    CloseButton:{
        backgroundColor:'#03dace',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20,
        elevation:20
    },
    CloseButtonText:{
        color:'#fff',
        fontSize:14,
        fontWeight:'bold'
    }
});
export default DialogBox;