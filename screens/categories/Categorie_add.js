import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import {Header, Icon} from "react-native-elements"
import React,{useState, useEffect} from 'react'
import {lightblue} from "../../constants/Colors"
import axios from "axios"
import {Button, TextInput} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';

const Categorie_add = ({navigation, route}) => {
  const [nom, setNom] = useState('');
  const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const displayPicture = (image) => {
        if(image !== ''){
            return(
                <Image source={{ uri: image }} style={{ width: 300, height: 220, marginTop:20 }} />
            )
        }
    }

    const displayAddPictureBtn = (image) => {
        if(image !== ''){
            return(
                <Button mode="outlined" labelStyle={{color:"#1E89E2"}} onPress={()=>pickImage()}>Modifier l'image</Button>
            )
        }else{
            return(
                <Button mode="outlined" labelStyle={{color:"#1E89E2"}} onPress={()=>pickImage()}>Ajouter une image</Button>
            )
        }
    }

    const displaySubmitBtn = (image) => {
        if(image !== ''){
            return(
                <Button mode="contained" style={{backgroundColor:"#1E89E2", marginTop:15}} labelStyle={{color:"#fff"}} onPress={()=>console.log("okok")}>Ajouter la categorie</Button>
            )
        }
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }else{
                alert('Sorry the image picker are not available on web platform')
            }
        })();
    }, []);

  return (
    <View style={{flex:1}}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
            <Text style={{fontSize:20, color:"#fff", fontWeight:"bold"}}>Ajouter une catégorie</Text>
            }
        />
      <View style={styles.container}>
        <Image source={require('../../assets/images/add.png')} style={{width:220, height:200}} />
        <View>
        <TextInput
            mode="outlined"
            label="Nom de la catégorie"
            style={styles.InputStyle}
            placeholder="Lubrifiants"
            onChangeText={text => setNom(text)}
            value={nom}
          />
            {displayAddPictureBtn(image)}
            {displayPicture(image)}
            {displaySubmitBtn(image)}
        </View>
      </View>
    </View>
  )
}

export default Categorie_add

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