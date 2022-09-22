import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import {Header, Icon} from "react-native-elements"
import React,{useState, useEffect} from 'react'
import {lightblue} from "../../constants/Colors"
import axios from "axios"
import {Button} from 'react-native-paper'

const Categorie_details = ({navigation, route}) => {
  const {id,name, image, nbre_produit} = route.params
    const [data, setData] = useState([])

    const Categorie_details = async() => {
        let endpoint = ""
        let res = await axios.get(endpoint)
        setData(res.data)
    }
  return (
    <View style={{flex:1}}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
            <Text style={{fontSize:20, color:"#fff", fontWeight:"bold"}}>{name}</Text>
            }
        />
      <View style={styles.container}>
        <Image source={{uri: image}} style={{width:230, height: 200}} />
        <Text style={{fontSize:22, fontWeight:"bold", marginBottom:15}}>{name}</Text>
        <Text style={{fontSize:22, fontWeight:"bold", marginBottom:15}}>Produit en stock: {nbre_produit}</Text>
        <Button mode="contained" style={{backgroundColor:"#1E89E2"}} onPress={()=> navigation.navigate("categorie_edit",{image, name, id})}>Modifier la catégorie</Button>
      </View>
    </View>
  )
}

export default Categorie_details

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        padding:20,
        alignItems:'center',
        justifyContent: 'center',
    }
})