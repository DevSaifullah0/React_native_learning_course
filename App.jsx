// import React from "react";
// import {View,Text, ActivityIndicator} from "react-native";
// // import Props from "./src/components/Props";
// // import InputText from "./src/components/InputText";
// // import Styling from "./src/components/Styling";
// // import FlatListScreen from "./src/components/FlatListScreen";
// // import SectionListScreen from "./src/components/SectionListScreen";
// // import LoginForm from "./src/components/LoginForm"
// // import ContactListScreen from "./src/Screens/Contact/ContactListScreen";
// // import Grid from "./src/components/Grid"
// // import UseEffectHook from './src/components/UseEffectHook';
// // import UpdatingStateHook from './src/components/UpdatingStateHook';
// // import UnmountingEffectHook from './src/components/UnmountingEffectHook';
// // import HideShowToggle from "./src/components/HideShowToggle";
// // import StyledLoginForm from "./src/components/StyledLoginForm";
// // import StyleWithButton from "./src/components/StyleWithButton"
// // import LoaderIndicator from "./src/components/LoaderIndicator"
// // import PressableButtonComponent from './src/components/PressableButtonComponent';
// // import Statusbar from "./src/components/Statusbar";
// // import UseRefHook from './src/components/UseRefHook'
// // import DialogueBox from './src/components/DialogBox'
// // import Alerts from './src/components/Alerts'
// // import Get_API from './src/components/Get_API'
// // import POST_API from './src/components/POST_API'
// // import PUT_API from './src/components/PUT_API'
// // import Patch_API from './src/components/Patch_API'
// // import Delete_API from './src/components/Delete_API'
// // import GetAPI_FlatList from './src/components/GetAPI_FlatList'
// // import PlatformComponents from './src/components/PlatformComponents'
// import SearchBar from './src/components/SearchBar'



// const App = () => {
//   return (
//     <View style={{flex:2}}>
//       {/* <Text style={{fontSize:30, fontWeight: 'bold',textAlign:'center',margin:20}}>React-Native App</Text> */}
//       {/* <Props/> */}
//       {/* <InputText /> */}
//       {/* <Styling/> */}
//       {/* <FlatListScreen/> */}
//       {/* <SectionListScreen/> */}
//       {/* <LoginForm/> */}
//       {/* <ContactListScreen/> */}
//       {/* <Grid/> */}
//       {/* <UseEffectHook/> */}
//       {/* <UpdatingStateHook/> */}
//       {/* <UnmountingEffectHook/> */}
//       {/* <HideShowToggle/> */}
//       {/* <StyledLoginForm/> */}
//       {/* <StyleWithButton/> */}
//       {/* <LoaderIndicator/> */}
//       {/* <PressableButtonComponent/> */}
//       {/* <Statusbar/> */}
//       {/* <UseRefHook/> */}
//       {/* <DialogueBox/> */}
//       {/* <Alerts/>  */}
//       {/* <Get_API/> */}
//       {/* <POST_API/>  */}
//       {/* if you want to change the Full data of User then you must have to input for all field then the selective data will be change */}
//       {/* <PUT_API/> */}
//       {/* if you want to change a single Selective field or 2,3 then you need to give them only not the all remaining fields to change  */}
//       {/* <Patch_API/> */}
//       {/* <Delete_API/> */}
//       {/* <GetAPI_FlatList/> */}
//       {/* <PlatformComponents/> */}
//       <SearchBar/>
//     </View>
//   );
// };
// export default App;







// Stack Navigation Build Code


// import { NavigationContainer } from "@react-navigation/native";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './src/Navigation-screens/Home';
// import About from './src/Navigation-screens/About'
// import SearchBar from './src/components/SearchBar'
// import DialogBox from './src/components/DialogBox'
// import StyledLoginForm from './src/components/StyledLoginForm'
// import Login from './src/Navigation-screens/Login'
// import PlatformComponents from'./src/components/PlatformComponents'
// import MyHeader from'./src/Navigation-screens/MyHeader'
// import Example from './src/Navigation-screens/Example'
// import { Alert, Button, StyleSheet } from "react-native";




// const Stack = createNativeStackNavigator();

// const sayHello=()=>{
//   Alert.alert('Greetings','Asslam-o-Alaikum')
// }


// const HeaderButtonLeft=()=> <Button title="One" color='red' onPress={sayHello}/>
// const HeaderButtonRight=()=> <Button title="two" color='green' onPress={sayHello}/>

// const MyExample =()=><Example/>;


// const App = () => {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator  screenOptions={{
//         headerStyle:styles.header,
//         // headerShown:false,
//         headerTitleStyle:styles.Title,
//         contentStyle: styles.ScreenColor,

//        }}>
//         <Stack.Screen name="Header" component={MyHeader}
//         options={{
//           title:'',

//           // The Below Button Components code will slow down the App performace don't use it directly

//           // headerLeft:()=><Button title="One" color='red'/>,
//           // headerRight:()=><Button title="Two" color='green'/>,

//           //Use the Components in Header in this way (Make a instence and save data there)
//           headerLeft:HeaderButtonLeft,
//           headerRight:HeaderButtonRight,
//           headerTitle:MyExample,
//           headerTitleAlign:'center'
//         }}
//         />

//         <Stack.Screen name='Welcome' component={PlatformComponents} options={{headerShown:false}}/>

//         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}
//         // options={{
//         //   headerStyle:{
//         //     backgroundColor:'#F5A623'
//         //   },
//         //   title:'Login Form',
//         //   headerTitleStyle:{
//         //     fontSize:30,
//         //     fontWeight:'900'
//         //   },
//         //   headerTitleAlign:'center'
//         // }}
//         />
//         <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
//         <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
//         <Stack.Screen name="SearchBar" component={SearchBar} options={{headerShown:false}}/>
//         <Stack.Screen name="DialogBox" component={DialogBox} options={{headerShown:false}}/>
//         <Stack.Screen name="StyledLoginForm" component={StyledLoginForm} options={{headerShown:false}}/>

//        </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// const styles=StyleSheet.create({
//   header:{
//     backgroundColor:'#ffb700ff',
//   },
//   Title:{
//     fontSize:30,
//     fontWeight:'900',
//     color:'#000000ff',
//     // textAlign:'center',
//     // alignItems:'center'
//   },
//   ScreenColor:{
//     backgroundColor:'lightgreen',
//   },
// });
// export default App;



















// Drawer Navigation Building Code




// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import 'react-native-gesture-handler';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';


// const Drawer=createDrawerNavigator()

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Home Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const ProfileScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Profile Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const SettingsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Settings Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const App = () => {
//   return (
//       <NavigationContainer>
//         <Drawer.Navigator 
//          screenOptions={{
//           drawerStyle:{
//             backgroundColor:'#e6e6e6',
//             width:240,
//           },
//           drawerLabelStyle:{
//             fontSize:18,
//             color:'#333',

//           },
//           headerStyle:{
//             backgroundColor:'#F5A623' 
//           },
//           headerTintColor:'#fff',
//           headerTitleAlign:'center',
//          }}
//         >

//           <Drawer.Screen name='Home' component={HomeScreen}/>
//           <Drawer.Screen name='Profile' component={ProfileScreen}/>
//           <Drawer.Screen name='Settings' component={SettingsScreen}/>

//         </Drawer.Navigator>
//       </NavigationContainer>
//   );
// };


// const styles=StyleSheet.create({
//   ScreenContainer:{
//     flex:1,
//     backgroundColor:'#e6e6e6',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   title:{
//     fontSize:20,
//     fontWeight:'900',
//     marginBottom:20
//   },
//   Button:{
//     backgroundColor:'#F5A623',
//     borderRadius:10,
//     textAlign:'center',
//     width:'25%',
//     height:50,
//   },
//   ButtonText:{
//     fontSize:18,
//     fontWeight:'900',
//     color:'#575140ff',
//     textAlign:'center',
//     marginTop:11
//   }
// });
// export default App;



















// Tab Navigation Bottom
// |
// |
// |
// |
// |
// V



// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';



// const getTabBarIcon = (routeName, focused, color, size) => {
//   let iconName;
//   if (routeName === 'Home') {
//     iconName = focused ? 'home' : 'home-outline';
//   }
//   else if (routeName === 'Profile') {
//     iconName = focused ? 'person' : 'person-outline';
//   }
//   else if (routeName === 'Settings') {
//     iconName = focused ? 'settings' : 'settings-outline';
//   }
//   return <Icon name={iconName} size={size} color={color} />
// };
// const Tab = createBottomTabNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Home Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const ProfileScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Profile Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const SettingsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Settings Screen</Text>

//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.Button}>
//         <Text style={styles.ButtonText}>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };



// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator

//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
//           tabBarActiveTintColor: '#F5A623',
//           tabBarInactiveTintColor: '#000000ff',
//           tabBarStyle: {
//             paddingBottom: 5,
//             height: 90,
//             // borderRadius:30,
//             paddingTop: 10,
//             borderTopWidth: 0,
//             elevation: 10,
//             shadowColor: "#000",
//             shadowOpacity: 0.,
//             shadowRadius: 8,
//             shadowOffset: {
//               width: 0,
//               height: -3,
//             },
//             tabBarLabelStyle: {
//               fontSize: 12,
//               fontWeight: "900",
//               marginBottom: 10,
//             },
//           },

//         })}>

//         <Tab.Screen name='Home' component={HomeScreen} />
//         <Tab.Screen name='Settings' component={SettingsScreen} />
//         <Tab.Screen name='Profile' component={ProfileScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };



// const styles = StyleSheet.create({
//   ScreenContainer: {
//     flex: 1,
//     backgroundColor: '#e6e6e6',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '900',
//     marginBottom: 20
//   },
//   Button: {
//     backgroundColor: '#F5A623',
//     borderRadius: 10,
//     textAlign: 'center',
//     width: '25%',
//     height: 50,
//   },
//   ButtonText: {
//     fontSize: 18,
//     fontWeight: '900',
//     color: '#575140ff',
//     textAlign: 'center',
//     marginTop: 11
//   }
// });
// export default App;








                  // To Tab Navigation 
                          //  |
                          //  |
                          //  |
                          //  |
                          //  |
                          //  V





// import 'react-native-gesture-handler';

// import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native'
// import{createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'



// const ChatsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Chats Screen</Text>

//       <TouchableOpacity onPress={() => navigation.goBack(CallsScreen)} style={styles.Button}>
//         <Text style={styles.ButtonText}>Go</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const StatusScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Status Screen</Text>

//       <TouchableOpacity onPress={() => navigation.goBack(ChatsScreen)} style={styles.Button}>
//         <Text style={styles.ButtonText}>Go</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const CallsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <Text style={styles.title}>Calls Screen</Text>

//       <TouchableOpacity onPress={() => navigation.goBack(StatusScreen)} style={styles.Button}>
//         <Text style={styles.ButtonText}>Go</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };



// const Tab= createMaterialTopTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{
//         tabBarActiveTintColor:'#F5A623',
//         tabBarInactiveTintColor:'#ffffffff',
//         tabBarStyle:{
//           backgroundColor:'#bebbbbff',
//           height:80
//         },
//         tabBarIndicatorStyle:{
//           backgroundColor:'#F5A623',
//           height:4,
//         },
//         tabBarLabelStyle:{
//           fontSize:20,
//           marginTop:30
//         }
//       }}>
//         <Tab.Screen name='Chats' component={ChatsScreen}/>
//         <Tab.Screen name='Status' component={StatusScreen}/>
//         <Tab.Screen name='Calls' component={CallsScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };







// const styles=StyleSheet.create({
//   ScreenContainer:{
//     flex:1,
//     backgroundColor:'#e6e6e6',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   title:{
//     fontSize:20,
//     fontWeight:'900',
//     marginBottom:20
//   },
//   Button:{
//     backgroundColor:'#F5A623',
//     borderRadius:10,
//     textAlign:'center',
//     width:'25%',
//     height:50,
//   },
//   ButtonText:{
//     fontSize:18,
//     fontWeight:'900',
//     color:'#575140ff',
//     textAlign:'center',
//     marginTop:11
//   }
// });
// export default App;















import { View, Text } from 'react-native'
import React from 'react'
// import AsyncStorageScreen from './src/components/AsyncStorageScreen'
// import ImageComponent from './src/components/ImageComponent';
import Parent from './src/ContextAPI/Parent'

const App = () => {
  return (
    // <View style={{backgroundColor:'#fff',flex:1}}>
    <View style={{backgroundColor:'#fff',flex:1}}>
      {/* <AsyncStorageScreen/> */}
      {/* <ImageComponent/> */}
      <Parent/>
    </View>
  )
}

export default App