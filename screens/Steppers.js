import React, { useState }  from 'react'
import { StyleSheet,Alert, Text, View, Image } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { palewhite, lightblue } from "../constants/Colors";

const Steppers = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProgressSteps activeStepIconBorderColor="#1E89E2" completedStepIconColor="#1E89E2">
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} nextBtnText="Suivant">
                  <View>
                      <Image
                        source={require(`../assets/images/anonyme.png`)}
                        style={styles.illustration}
                      />
                      <Text style={styles.title}>Anonyme</Text>
                      <Text style={styles.text}>Nous ne laissons aucune trace de vos achats sur la plateforme.</Text>
                  </View>
              </ProgressStep>
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle} previousBtnText="Précédent" nextBtnText="Suivant">
                  <View>
                      <Image
                        source={require(`../assets/images/securise.png`)}
                        style={styles.illustration}
                      />
                      <Text style={styles.title}>Sécurisé</Text>
                      <Text style={styles.text}>Notre système d'analyse de données vous permet de naviguer sans risque de perte de vos informations.</Text>
                  </View>
              </ProgressStep>
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle} previousBtnText="Précédent" finishBtnText="Terminé" onSubmit={()=> navigation.navigate('Login')}>
                  <View>
                      <Image
                        source={require(`../assets/images/rapide.png`)}
                        style={styles.illustration}
                      />
                      <Text style={styles.title}>Efficacité</Text>
                      <Text style={styles.text}>Il sera rapide pour vous de trouvez ce que vous voulez et rapidement sans avoir à perdre de temps.</Text>
                  </View>
              </ProgressStep>
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle} previousBtnText="Précédent" finishBtnText="Terminé" onSubmit={()=> navigation.navigate('Signup')}>
                  <View>
                      <Image
                        source={require(`../assets/images/livraison.png`)}
                        style={styles.illustration}
                      />
                      <Text style={styles.title}>Livraison</Text>
                      <Text style={styles.text}>N'ayez crainte ! Nous vous livrerons votre commandes à l'endroit ou vous desirez dans les plus brefs délai et a moins coût.</Text>
                  </View>
              </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default Steppers

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop: "8%",
        backgroundColor: "white",
        paddingRight: 8,
    },
    buttonTextStyle:{
      backgroundColor: "#1E89E2",
      borderRadius: 3,
      textAlign:"center",
      width:100,
      height:35,
      padding:3,
      color:"white"
    },
    title:{
      fontSize:25,
      fontWeight:"bold",
      marginLeft: 20,
    },
    text:{
      fontSize:20,
      marginLeft: 20,
      color:"#9A9FA4"
    },
    illustration:{
        width:220, height:200,alignSelf:"center", margin:25, marginBottom:50
    }

})
