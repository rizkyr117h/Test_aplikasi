import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Halaman
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import First from './src/screens/First';
import Search from './src/screens/Search';
import chat from './src/screens/Chat'
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
          initialRouteName='First'
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name = "First" component={First} />
          <Stack.Screen name = "Login" component={Login} />
          <Stack.Screen name = "Dashboard" component={Tab1} />
          <Stack.Screen name = "Search" component={Tab1} />
          <Stack.Screen name = "chat" component={Tab1} />
          <Stack.Screen name = "Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

function Plus() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export function Tab1(){
  return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused 
              ? 'search' 
              : 'search-outline';
            }else if (route.name === 'chat') {
              iconName = focused 
              ? 'chatbox-ellipses' 
              : 'chatbox-ellipses-outline';
            }else if (route.name === 'Profile') {
              iconName = focused 
              ? 'person' 
              : 'person-outline';
            }else if (route.name === 'Plus') {
              iconName = focused 
              ? 'add-circle' 
              : 'add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Plus" component={Plus} />
        <Tab.Screen name="chat" component={chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      )
    {/* <Tab.Navigator
    >
        
        
      </Tab.Navigator> */}

}
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>

//     </NavigationContainer>
//   );
// }