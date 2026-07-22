import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'rgba(246, 202, 234, 0.92)'
    }, 
    heading:{
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'crimson',
        textAlign:'center',
    },
    list:{
        backgroundColor:'lightblue',
        paddingHorizontal:20,
    },
    item:{
         backgroundColor:'crimson',
         borderRadius:10,
         marginVertical:15,
        paddingHorizontal:10
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#ffff',
        textAlign:'center'
    },
    city:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#ffff',
        textAlign:'center'
    },
    id:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#ffff',
        textAlign:'center'
    }
});