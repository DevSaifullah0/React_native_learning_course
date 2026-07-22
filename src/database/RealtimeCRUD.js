import database from '@react-native-firebase/database';
export const AddUserData=async(userData)=>{
    try {
        const newRef=database().ref('users').push();
        await newRef.set(userData);
        console.log('User Added Successfully!')
    } catch (error) {
        console.error('Error Adding user data',error);
        throw error
    }
};
export const getUserData=async()=>{
    try {
        const SnapShot=await database().ref('users').once('value');
        const userData=SnapShot.val() ? Object.entries(SnapShot.val()).map(([id,data])=>({id,...data})) : []
        console.log('Fetched Users',userData)
        return userData;
    } catch (error) {
        console.error('Error Fetching Users',error)
        throw error;
        
    }
};

export const UpdateUserData=async(id,UpdatedData)=>{
    try {
        await database().ref(`users/${id}`).update(UpdatedData);
        console.log('User Data Updated Successfully');
    } catch (error) {
        console.error('Error Updating User Data',error);
        throw error;
    }
};



export const DeleteUserData=async(id)=>{
    try {
        await database().ref(`users/${id}`).remove();
        console.log('User Data Deleted Successfully');
    } catch (error) {
        console.error('Error Deleting user Data',error);
        throw error
    }
}