import React, { useEffect, useState } from 'react';

import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import RatingScreen from './Screens/RatingScreen'

const { width, height } = Dimensions.get('window');

const App = () =>{

  const [shouwRating , setShowRating ] = useState(false);

  const handleRatingScreen = () =>{
    setShowRating(true);
  }
  if (shouwRating){
    return <RatingScreen></RatingScreen>
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/img/logo.png')} style={styles.imgStyle}></Image>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.text}>React Native's</Text>
      <Text style={styles.text}>Training Session</Text>
      <TouchableOpacity style={styles.button} onPress={handleRatingScreen}>
        <Text style={styles.buttonText}>Let's start</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black',
  },
  imgStyle : {
    alignSelf : "center",
    height : height * 0.18,
    width : width *0.3,
  },
  welcomeText : {
    color  : 'white',
    marginTop : height * 0.15,
    fontSize : height * 0.05,
    fontFamily : 'Calibri Bold Italic',
    marginLeft : width * 0.2,
    marginBottom : height * 0.02
  },
  text : {
    color  : 'white',
    //marginTop : height * 0.15,
    fontSize : height * 0.05,
    fontFamily : 'Calibri Bold Italic',
    marginLeft : width * 0.2,
    marginBottom : height * 0.02
  },
  button : {
    marginTop : height *0.2,
    backgroundColor : '#ee751d',
    width : width *0.5,
    height : height * 0.06,
    alignSelf : "center",
    borderRadius : height * 0.02,
  },
  buttonText : {
    padding : height * 0.01,
    textAlign : 'center',
    color : 'white',
    fontFamily : 'Calibri Bold',
    fontSize : height*0.03,
  }
  
})

export default App;