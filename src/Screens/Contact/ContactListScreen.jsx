import { FlatList ,Text} from 'react-native'
import React from 'react'
import {user} from "./userContactInfo";
import ContactItem from "../../components/ContactItem";
import {styles} from '../../style/style2';





const ContactListScreen = () => {
  const renderItem = ({ item }) => <ContactItem id={item.id} name={item.name} city={item.city} />;
  return (
    <FlatList
      data={user}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.heading}>Contact Info</Text>}
      // ListHeaderComponent={<Text style={{fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>Contact Info</Text>}
    />
  );
};


export default ContactListScreen;