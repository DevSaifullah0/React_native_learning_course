import { View, Text,ScrollView ,StyleSheet} from 'react-native';
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
const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {
            List.map((item) =>(
                <View key={item.pk} style={styles.item}>
                    <Text style={styles.itemText}>
                        Name: {item.name}
                    </Text>
                    <Text style={styles.itemText}>
                        Age: {item.age}
                    </Text>
                </View>
            ))
            }
        </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f9f8'

    },
    heading:{
        fontSize:50,
        fontWeight:'bold',
        fontStyle:'italic',
        textAlign:'center',
        marginVertical:20,
        color:'#000'
    },
    scrollContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:10,
    },
    item:{
        backgroundColor:'#ff0000ff',
        marginBottom:10,
        padding:20,
        width:'48%',
        height:90,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
    itemText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'700',
        fontStyle:'italic',
        textTransform:'uppercase',
    }
});
export default Grid;