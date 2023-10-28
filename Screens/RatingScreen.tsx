import React, {useState} from 'react';

import {
    Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

import ThankU from './ThankU';

const RatingScreen = () => {
  const [fullName, setFullName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');

  const [shouwEnd , setShowEnd ] = useState(false);

  const handleEndScreen = () =>{
    if (!fullName || !feedback || !rating){
        Alert.alert('Oups !', 'Please fill in all the blanks');
        return;
    }else{
        setShowEnd(true);
    }
    
  }
  if (shouwEnd){
    return <ThankU fullname={fullName}/>
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/logo.png')}
        style={styles.imgStyle}></Image>
      <Text style={styles.labelText}>Fullname :</Text>
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        keyboardType="default"
        value={fullName}
        onChangeText={setFullName}></TextInput>

      <Text style={styles.labelText}>Feedback :</Text>
      <TextInput
        style={styles.input}
        placeholder="Feedback"
        keyboardType="default"
        value={feedback}
        onChangeText={setFeedback}></TextInput>

      <Text style={styles.labelText}>Rating :</Text>
      <TextInput
        style={styles.input}
        placeholder="Rating"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}></TextInput>

    <TouchableOpacity style={styles.button} onPress={handleEndScreen}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imgStyle: {
    alignSelf: 'center',
    height: height * 0.18,
    width: width * 0.3,
  },
  labelText: {
    color: 'white',
    fontFamily: 'Calibri Bold',
    fontSize: height * 0.04,
    marginLeft: width * 0.2,
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.06,
    width: width * 0.7,
    margin: height * 0.009,
    marginLeft: width * 0.1,
    padding: width * 0.02,
    backgroundColor: 'white',
    borderRadius: height * 0.02,
    alignSelf: 'center',
    fontFamily: 'Calibri Bold',
  },
  button : {
    marginTop : height *0.1,
    backgroundColor : '#ee751d',
    width: width * 0.7,
    height : height * 0.06,
    alignSelf : "center",
    marginLeft: width * 0.1,
    borderRadius : height * 0.02,
  },
  buttonText : {
    padding : height * 0.01,
    textAlign : 'center',
    color : 'white',
    fontFamily : 'Calibri Bold',
    fontSize : height*0.03,
  }
});
export default RatingScreen;
