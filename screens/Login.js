import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Platform, Alert, Image} from 'react-native'
import {Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const login = async() => {
        const id = await AsyncStorage.setItem('id','2bce36d9-4dec-4818-ae59-ac5238bbad01')
        return navigation.navigate('Tabs',{id:id})
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/login.png')}
                style={styles.logo}
            />
            <Text style={{fontSize:21, color:'gray', color:"#000", textAlign:"center", fontWeight:"bold"}}>Connectez-vous pour continuer !</Text>
            <View style={styles.forms}>
                <View style={{paddingTop:5}}>
                    <Input
                    style={styles.InputStyle}
                        placeholder="Entrez votre nom d'utilisateur"
                        leftIcon={
                            <Icon
                            name='phone'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={text => onChangeUsername(text)} 
                        value={username}
                    />
                </View>

                <View style={{paddingTop:10}}>
                <Input
                    style={styles.InputStyle}
                        placeholder="Entrez votre mot de passe"
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={text => onChangePassword(text)} 
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <Text style={{textDecorationLine:"underline", textAlign:"right", marginTop:5, color:"#000"}} onPress={()=> console.log("ok ok")}>Mot de passe oublié ?</Text>

                <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => login()}>
                    Connexion
                </Button>

                <Text style={{textAlign:"center", color:"#000"}}  onPress={() => navigation.navigate('Signup')}>Vous n'avez pas de compte ? Inscrivez-vous</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:"center",
        padding:15,
    },
    itemStyle:{
        marginTop:5
    },
    InputStyle:{
        color:"black",
        marginBottom:1,
        marginLeft:5,
        fontSize:14
    },
    forms:{
        marginTop:"10%",
        paddingRight:10
    },
    logo:{
        width:170,
        height:150,
        marginBottom:30,
        marginTop:30
    },
    textinput:{
        height: 40,
        width:"100%",
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:4,
        margin:10,
        paddingLeft:5,
        paddingRight:5,
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        backgroundColor:"#1E89E2"
    },
    logo:{
        height:200,
        width:220,
        marginBottom:20,
        alignSelf:"center"
    },
})

export default Login