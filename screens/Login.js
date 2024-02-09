import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableHighlight, Touchable, Alert } from 'react-native';
import { Formik } from 'formik'
import { useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
  const navigation = useNavigation();
  const initialFormData = Object.freeze({
		username: '',
		password: '',
		
	});

  const [formData, updateFormData] = useState(initialFormData);
  const handleChangeUsername = (textValue) => {
    updateFormData({
			...formData,
			username: textValue,
		});
  };
  const handleChangePassword = (textValue) => {
    updateFormData({
			...formData,
			password: textValue,
		});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.username == 'jagjit' && formData.password == 'singh'){
      navigation.navigate('Home');
    }
    else{
      Alert.alert('Invalid Credentials');
    }
  };

  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.imageContainer}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.Logo}/>
                <Text style={styles.logoText}>ARTFUL</Text>
            </View>
            <Formik 
            // onSubmit={handleSubmit}
            
            >
              <View style={styles.form}>
                <Text style={styles.text}>Username</Text>
                <TextInput 
                  style={styles.input}
                  // onChangeText={handleChangeEmail}
                  onChangeText={handleChangeUsername}
                  name="username"
                  placeholderTextColor="#c7c6c5"
                />
                <Text style={styles.text}>Password</Text>
                <TextInput 
                  style={styles.input}
                  secureTextEntry={true}
                  name="password"
                  onChangeText={handleChangePassword}
                  // onChangeText={onChangeUsername}
                  placeholderTextColor="#c7c6c5"
                />
                
                <TouchableHighlight
                style={styles.submit}
                // onPress={() => this.submitSuggestion(this.props)}
                onPress={handleSubmit}
                >
                  <Text
                  style={styles.button}
                  >
                    Sign In
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() =>
                  navigation.navigate('Register')}
                  >
                  <Text
                  style={styles.register}
                  >
                    New User(Register)
                  </Text>
                </TouchableHighlight>
                
              </View>
            
            </Formik>
            
            {/* <StatusBar style="auto" /> */}
        </View>
        <View
          style={styles.bottomContainer}
        >
          <Text
            style={styles.bottomText}
          >
            OR LOGIN WITH
          </Text>
          <View
            style={styles.bottomWhiteContainer}
          >
            <TouchableHighlight
              style={styles.bottomIcons}
            >
              <Image source={require('../assets/apple.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.bottomIcons}
            >
              <Image source={require('../assets/facebook.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.bottomIcons}
            >
              <Image source={require('../assets/gmail.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
          </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bottomIcons :{
    flex:1,
    // height: 50,
    // width: 50,
    padding:5
  },
  bottomIcon :{
    height:35,
    width: 35
  },
  bottomText: {
    color: 'white',
    marginBottom:10
  },
  bottomWhiteContainer :{
    backgroundColor: 'white',
    width: '60%',
    borderRadius: 50,
    flexDirection: 'row',
    paddingLeft:20,
    paddingTop:5,
    paddingBottom:5
  },
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    height: 100,
    width:'100%',
    alignItems: 'center',
    // marginBottom: 20
  },
  form:{
      marginTop: 50,
      alignItems: 'center'
  },
  logoText: {
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
      paddingLeft: 15,
  },
  logoContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  text: {
    color: 'white',
  },
  Logo:{
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    width :200,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color:'black',
    backgroundColor: 'white',
    borderRadius: 50
  },
  button: {
    color: 'white',
    backgroundColor: '#1db4e3',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 16,
    width:'100%'
  },
  submit: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#1db4e3',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1db4e3',
    marginBottom:10,
    width: 150,
    justifyContent: 'center',
  },
  register:{
    color: 'white',
    marginBottom:15,
    fontSize:15,
    textAlign:'center'
  }
});
