import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const SearchBar = () => {
    const [searcQuery, setSearchQuery] = useState('');
    const Contacts = [
        { id: 1, name: 'Saifullah', phone: '03011234567' },
        { id: 2, name: 'Faraz', phone: '03123456789' },
        { id: 3, name: 'Qudrat', phone: '03214567890' },
        { id: 4, name: 'Farzana', phone: '03335678901' },
        { id: 5, name: 'Shakeel', phone: '03446789012' },
        { id: 6, name: 'Sohaib', phone: '03057890123' },
        { id: 7, name: 'Zohaib', phone: '03168901234' },
        { id: 8, name: 'Wajeeha', phone: '03279012345' },
        { id: 9, name: 'Malaika', phone: '03380123456' },
        { id: 10, name: 'Hoorain', phone: '03491234567' },
        { id: 11, name: 'Paroohsha', phone: '03002345678' },
        { id: 12, name: 'Zubair', phone: '03113456789' },
        { id: 13, name: 'Zakir', phone: '03224567890' },
    ];
    const ViewData=(item)=>{
        Alert.alert("Information ",`Phone: : ${item.phone}`   
        )
    }
    const FilteredContacts = Contacts.filter(contact => contact.name.toLowerCase().includes(searcQuery.toLowerCase()))
    const renderItem = ({ item }) => (
            <TouchableOpacity onPress={()=>ViewData(item)} style={styles.ContactItem}>
            <Text>{item.id}:</Text>
            <Text>{item.name}</Text>
            </TouchableOpacity>
    )
    return (
        <View style={styles.Container}>
            <Text style={styles.HeaderText}>SearchBar</Text>
            <Text style={styles.Head}>Contact List</Text>
            <TextInput style={styles.SearchInput}
                placeholder='Search Contacts Here...'
                placeholderTextColor={'black'}
                value={searcQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList
                data={FilteredContacts}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            //   contentContainerStyle={}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
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
    Head: {
        fontSize: 25,
        fontWeight: '600',
        color: '#057764ea',
        textAlign: 'center',
    },
    SearchInput: {
        backgroundColor: '#d3f9f7ff',
        borderRadius: 10,
        padding: 8,
        marginHorizontal: 40,
        height: 50,
        color: '#000',
        fontSize: 15,
        borderWidth: 3,
        borderColor: '#03dace'
    },
    ContactItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    ContactName: {
        fontSize: 18,
        color: '#004d40'
    }
});
export default SearchBar;