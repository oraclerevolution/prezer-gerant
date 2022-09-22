import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { palewhite, lightblue } from "./constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Signup from "./screens/Signup"
import Login from './screens/Login'
import Waiting from './screens/Waiting'
import Home from './screens/Home'
import Settings from './screens/Settings'
import Categories from './screens/categories/Categories'
import Commandes from './screens/commandes/Commandes'
import Livraisons from './screens/livraisons/Livraisons'
import Produits from './screens/produits/Produits'
import Categorie_edit from './screens/categories/Categorie_edit'
import Categorie_add from './screens/categories/Categorie_add'
import Categorie_details from "./screens/categories/Categorie_details";

const TabStack = createBottomTabNavigator();

const NavigationTabs = () => (
  <TabStack.Navigator activeColor={lightblue} labelStyle={{ fontSize: 12}}  barStyle={{backgroundColor:"#573178"}} screenOptions={{ headerShown: false }} initialRouteName="Home">
    <TabStack.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="store" color={color} size={26} />
        ),
      }}
    />
    <TabStack.Screen 
      name="Categories" 
      component={Categories} 
      options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="shape" color={color} size={26} />
        ),
      }}
      />
    <TabStack.Screen 
      name="Produits" 
      component={Produits} 
      options={{
        tabBarLabel: 'Produits',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="basket" color={color} size={26} />
        ),
      }} 
    />

    <TabStack.Screen 
      name="Livraisons" 
      component={Livraisons} 
      options={{
        tabBarLabel: 'Livraisons',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="moped" color={color} size={26} />
        ),
      }} 
    />

    <TabStack.Screen 
      name="Paramètres" 
      component={Settings} 
      options={{
        tabBarLabel: 'Paramètres',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        ),
      }} 
    />
  </TabStack.Navigator>
)

const NavigationStack = createNativeStackNavigator();

const NavigationUser = () => (
  <NavigationStack.Navigator headerMode="none" initialRouteName={"Login"}>
    <NavigationStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Waiting" component={Waiting} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Tabs" component={NavigationTabs} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_edit" component={Categorie_edit} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_add" component={Categorie_add} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_details" component={Categorie_details} options={{ headerShown: false }} />
  </NavigationStack.Navigator>
)

const NavigationUserLogin = () => (
  <NavigationStack.Navigator headerMode="none" initialRouteName={"Tabs"}>
    <NavigationStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Waiting" component={Waiting} options={{ headerShown: false }} />
    <NavigationStack.Screen name="Tabs" component={NavigationTabs} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_edit" component={Categorie_edit} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_add" component={Categorie_add} options={{ headerShown: false }} />
    <NavigationStack.Screen name="categorie_details" component={Categorie_details} options={{ headerShown: false }} />
  </NavigationStack.Navigator>
)

export default function App() {
  const [id, setId] = React.useState()

  const checkId = async()=>{
    const id = await AsyncStorage.getItem('id')
    console.log(id)
    setId(id)
  }

  React.useEffect(() => {
    checkId()
  }, [])

  return (
    id == null ? (
      <NavigationContainer>
        <NavigationUser />
      </NavigationContainer>
    ):(
      <NavigationContainer>
        <NavigationUserLogin />
      </NavigationContainer>
    )
  );
}