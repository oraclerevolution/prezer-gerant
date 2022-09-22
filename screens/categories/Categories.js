import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import {Header, Icon} from "react-native-elements"
import React,{useState, useEffect} from 'react'
import {lightblue} from "../../constants/Colors"
import axios from "axios"
import {FAB, Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Categories = ({navigation}) => {
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState()

  const Item = ({ id, name, image, nbre_produit, produits }) => (
    <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('categorie_details',{id,name, image, nbre_produit, produits})}>
      <View style={{borderTopLeftRadius:15, borderTopEndRadius:15, backgroundColor:"#efefef", padding:3}}>
        <Text style={{color:lightblue, fontWeight:"bold", fontSize:14, marginBottom:4,top:"20%", textTransform:"capitalize", paddingLeft:5,}}>{name}</Text>
      </View>
      <View style={{height:158, borderBottomLeftRadius:15, borderBottomEndRadius:15, alignItems:"center", justifyContent:"center", borderWidth:1, borderColor:"#efefef"}}>
        <Image source={{ uri: image}} style={styles.logo} resizeMode="contain" />    
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item id={item.id} name={item.name} image={item.image} nbre_produit={item.nbre_produit} produits={item.produits} />;


  const getCategory = async() => {
    const id = await AsyncStorage.getItem('id')
    const endpoint = "https://app-api-ecommerce-oracle.herokuapp.com/store/"+id
    let res = await axios.get(endpoint)
    setdata(res.data.categories)
    setLoading(false)
  }

  useEffect(()=> {
    getCategory()
  },[])

  return (
    <View style={{flex:1}}>
      <Header
        centerComponent={
          <Text style={{fontSize:20, color:"#fff", fontWeight:"bold"}}>Catégories</Text>
        }
      />
      {loading ? (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', }}>
        <ActivityIndicator
          //visibility of Overlay Loading Spinner
          visible={loading}
          color="#1E89E2"
          size="large"
        />
      </View>
      ):(
        <View style={styles.container}>
          <SafeAreaView style={{backgroundColor:"#fff", flex:1, padding:10, alignItems: 'center',}}>
          <ScrollView>
            <FlatList
              data={data}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={item => item?.id}
            />
          </ScrollView>
        </SafeAreaView>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('categorie_add')}
        />
        </View>
      )}
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#1E89E2" ,
  },
  logo: {
    width: "100%",
    height: 120,
  },
  item:{
    margin:8,
    //marginLeft:"5%",
    backgroundColor:"#fff",
    borderRadius:15,
    height:200,
    width:150,
  }
})