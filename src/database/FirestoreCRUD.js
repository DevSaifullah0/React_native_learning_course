import firestore from '@react-native-firebase/firestore';




export const addUserData=async(userData)=>{
    try {
        await firestore().collection('users').add(userData);
        console.log('Users Added successfully');
    } catch (error) {
        console.error('Error adding user data: ',error);
    }
};


export const readUserData=async()=>{
    try {
        const usersSnapShot= await firestore().collection('users').get();
        const users= usersSnapShot.docs.map(doc =>({id:doc.id,...doc.data()}));
        console.log('Fetched users : ',users);
        return users;
    } catch (error) {
        console.error('Error Fetching Data',error);
    }
};

export const UpdateUsers = async(id,UpdatedData)=>{
    try {
        await firestore().collection('users').doc(id).update(UpdatedData);
        console.log('User updated Successfully');
    } catch (error) {
        console.error('Error Updating user data: ',error);
    }
};


export const RemoveUsers = async(id)=>{
    try {
        await firestore().collection('users').doc(id).delete();
        console.log('Users deleted successfully');
    } catch (error) {
        console.error('Error deleting user data: ',error);
    }
};