import { View, Text, Alert, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addUserData, readUserData, RemoveUsers, UpdateUsers } from '../database/FirestoreCRUD';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCRUD = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editId, setEditId] = useState(null);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');


    const fetchUsers = async () => {
        try {
            const usersList = await readUserData();
            setUsers(usersList);
        } catch (error) {
            // Alert.alert('Error','Error in Fetching Users')
            setMessage('Error in Fetching Users');
            setMessageType('Error');
            setTimeout(() => {
                setMessage('');
            }, 3000);

        }
    }


    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async () => {
        if (!name || !email || !phone) {
            // Alert.alert('Error','Please fill all the fields')
            setMessage('Please fill all the fields');
            setMessageType('Error');
            setTimeout(() => {
                setMessage('');
            }, 3000);

            return;
        }
        const userData = { name, email, phone };
        try {
            if (editId) {
                await UpdateUsers(editId, userData);
                // Alert.alert('Success','User updated successfully');
                setMessage('User Updated Successfully');
                setMessageType('Success');
                setTimeout(() => {
                    setMessage('');
                }, 3000);

            }
            else {
                await addUserData(userData);
                setMessage('User Added Successfully');
                setMessageType('Success');
                setTimeout(() => {
                    setMessage('');
                }, 3000);

            }
            setName('');
            setEmail('');
            setPhone('');
            setEditId(null);
            fetchUsers();
        } catch (error) {
            // Alert.alert('Error',error.message)
            setMessage(error.message);
            setMessageType('Error');
            setTimeout(() => {
                setMessage('');
            }, 3000);

        }
    };
    const handleDelete = async (id) => {
        try {
            await RemoveUsers(id);
            // Alert.alert('Success','User Deleted Successfully')
            setMessage('User Deleted Successfully');
            setMessageType('Success');
            setTimeout(() => {
                setMessage('');
            }, 3000);

            fetchUsers();
        } catch (error) {
            // Alert.alert('Error',error.message)
            setMessage(error.message);
            setMessageType('Error');
            setTimeout(() => {
                setMessage('');
            }, 3000);

        }
    };
    const handleEdit = async (user) => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone)
        setEditId(user.id);

    }
    return (
        <SafeAreaView>
            <View className=' bg-gray-200 p-10 justify-center items-center h-full'>
                <View className='bg-white rounded-xl p-8 shadow-2xl w-full max-w-md mx-auto'>
                    <Text className="text-2xl font-bold text-yellow-600 text-center mb-10">{editId ? 'Edit User' : 'Add User'}</Text>
                    <Text className='mb-1 mt-2 font-semibold'>Name : </Text>
                    <TextInput
                        className='border border-gray-300 p-4 w-full mb-5 rounded-xl focus:border-yellow-500'
                        placeholder='Enter your name'
                        placeholderTextColor={'black'}
                        value={name}
                        onChangeText={setName}
                    />

                    <Text className='mb-1 mt-2 font-semibold'>Email : </Text>
                    <TextInput
                        className='border border-gray-300 p-4 w-full mb-5 rounded-xl focus:border-yellow-500'
                        placeholder='Enter your Email'
                        placeholderTextColor={'black'}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />

                    <Text className='mb-1 mt-2 font-semibold'>Contact : </Text>
                    <TextInput
                        className='border border-gray-300 p-4 w-full mb-5 rounded-xl focus:border-yellow-500'
                        placeholder=' Phone number'
                        placeholderTextColor={'black'}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType='phone-pad'
                    />
                    {message ? (
                        <Text
                            className={`mb-4 font-semibold ${messageType === 'Success'
                                ? 'text-green-600'
                                : 'text-red-600'
                                }`}>
                            {message}
                        </Text>
                    ) : null}

                    <TouchableOpacity className='bg-yellow-500 p-5 rounded-xl' onPress={handleSubmit}>
                        <Text className='text-black text-center font-semibold text-lg'>
                            {editId ? 'Update' : 'Add'} User
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                className=' border border-gray-400 rounded-2xl mt-2'
                    data={users}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View className='bg-white p-4 mt-4 rounded-xl shadow-xl w-full max-w-md mx-auto flex-row justify-between items-center'>
                            <View className='w-full '>
                                <Text className='text-lg font-bold text-gray-800'>{item.name}</Text>
                                <Text className=' text-gray-800'>{item.email}</Text>
                                <Text className=' text-gray-800'>{item.phone}</Text>

                                <View className='flex-row justify-'>
                                    <TouchableOpacity className='bg-green-500 rounded-xl mr-2 p-2 ml-20' onPress={() => handleEdit(item)}>
                                        <Text className='text-white'>Edit ✏️</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className='bg-red-500 rounded-xl mr-2 p-2 ml-3' onPress={() => handleDelete(item.id)}>
                                        <Text className='text-white'>Delete 🗑</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View className='flex-row'>
                                <TouchableOpacity className='bg-green-500 rounded-xl mr-2 p-2' onPress={() => handleEdit(item)}>
                                    <Text className='text-white'>✏️</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-red-500 rounded-xl mr-2 p-2' onPress={() => handleDelete(item.id)}>
                                    <Text className='text-white'>🗑</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    )}
                    ListEmptyComponent={<Text className='text-center text-gray-500 mt-4'>No user found</Text>}
                    contentContainerStyle={{ paddingBottom: 20, }}
                />

            </View>
        </SafeAreaView>
    );
};

export default UserCRUD;