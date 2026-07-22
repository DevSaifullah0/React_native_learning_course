import { View, Text ,SectionList,StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native/types_generated/index';

const ListItems=[
    {
        title:'Fruits',
        data: [
            {id:1,name:'Apple'},
            {id:2,name:'Mango'},
            {id:3,name:'Orange'},
            {id:4,name:'Grapes'},
        ]
    },
    {
        title:'Vegetables',
        data: [
            {id:5,name:'Potato'},
            {id:6,name:'Carrot'},
            {id:7,name:'Tomato'},
            {id:8,name:'Brocali'},
        ]
    },
]

const SectionListScreen = () => {
    const renderItem=({item})=>(
        <View>
            <Text style={styles.item}>{item.id}:{item.name}</Text>
        </View>
    );
    const renderSectionHeader=({section})=>(
        <View >
            <Text style={styles.title}>{section.title}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <Text>SectionListScreen</Text>
      <SectionList
        sections={ListItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item)=>item.id}

      />
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'pink',
        paddingTop:15,
        // alignItems:'center',
        justifyContent:'center'

    },
    item:{
        backgroundColor:'#ffff',
        padding:10,
        marginVertical:5,
        borderRadius:120,
        margin:20
    },
    title:{
        backgroundColor:'crimson',
        color:'#ffff',
        margin:120,
        marginVertical:5,
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'bold',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'

    }
});

export default SectionListScreen;