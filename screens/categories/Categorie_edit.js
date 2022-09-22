import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import {Header, Icon} from "react-native-elements"
import React,{useState, useEffect} from 'react'
import {lightblue} from "../../constants/Colors"
import axios from "axios"
import {Button, TextInput} from 'react-native-paper'

const Categorie_edit = ({navigation, route}) => {
    const {id,name, image} = route.params
    const [nom, setNom] = useState(name)
  return (
    <View style={{flex:1}}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{fontSize:20, color:"#fff", fontWeight:"bold"}}>Modifiez</Text>
            }
        />
        <View style={styles.container}>
            <Image source={{uri: image}} style={{width:230, height: 200}} />
            <Button mode="outlined" style={{marginBottom:10}}>Changez l'image</Button>
            <TextInput
                mode="outlined"
                label="Nom de la categorie"
                value={nom}
                style={styles.InputStyle}
                onChangeText={text => setNom(text)}
            />
            <Button mode="contained" style={{marginBottom:10}}>Modifier la catégorie</Button>
        </View>
    </View>
  )
}

export default Categorie_edit

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        padding:20,
        alignItems:'center',
        justifyContent: 'center',
    },
    InputStyle:{
        color:"black",
        marginBottom:"5%",
        marginLeft:5,
        fontSize:14,
        width:250,
        height:50
    },
})