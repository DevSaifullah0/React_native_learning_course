import { View, Text, FlatList ,StyleSheet} from 'react-native';
import React from 'react';


const List = [
    { pk: 1, name: "Ali", age: 22, city: "Karachi" },
    { pk: 2, name: "Ahmed", age: 24, city: "Lahore" },
    { pk: 3, name: "Saifullah", age: 21, city: "Karachi" },
    { pk: 4, name: "Hassan", age: 23, city: "Islamabad" },
    { pk: 5, name: "Bilal", age: 25, city: "Hyderabad" },
    { pk: 6, name: "Usman", age: 20, city: "Multan" },
    { pk: 7, name: "Hamza", age: 22, city: "Quetta" },
    { pk: 8, name: "Danish", age: 26, city: "Peshawar" },
    { pk: 9, name: "Zain", age: 21, city: "Sukkur" },
    { pk: 10, name: "Taha", age: 23, city: "Rawalpindi" },
    { pk: 11, name: "Ayesha", age: 22, city: "Karachi" },
    { pk: 12, name: "Fatima", age: 24, city: "Lahore" },
    { pk: 13, name: "Hina", age: 20, city: "Islamabad" },
    { pk: 14, name: "Maham", age: 25, city: "Hyderabad" },
    { pk: 15, name: "Sana", age: 21, city: "Multan" },
    { pk: 16, name: "Iqra", age: 23, city: "Quetta" },
    { pk: 17, name: "Laiba", age: 22, city: "Peshawar" },
    { pk: 18, name: "Noor", age: 24, city: "Sukkur" },
    { pk: 19, name: "Zoya", age: 20, city: "Rawalpindi" },
    { pk: 20, name: "Mariam", age: 25, city: "Karachi" }

];
const FlatListScreen = () => {
    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.item}>
                {item.pk} : {item.name} , Age: {item.age} , City: {item.city}
            </Text>
        </View>
    )
    return (
        <View>
            <Text style={styles.container}>
                FlatListScreen
                </Text>
            <FlatList
                data={List}
                renderItem={renderItem}
                keyExtractor={item => item.pk.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'crimson',
        borderColor:'black',
        color:'white',
        paddingTop:15,
        borderWidth:3,
        borderRadius:8,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    list:{
        paddingHorizontal:10,

    },
    item:{
        backgroundColor:'yellow',
        borderWidth:3,
        borderColor:'black',
        padding:20,
        marginVertical:8,
        borderRadius:8,
        shadowOfset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
})

export default FlatListScreen;