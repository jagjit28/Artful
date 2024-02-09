import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableHighlight, Touchable, Alert, Button, ScrollView } from 'react-native';
import { Formik } from 'formik'
import { useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.imageContainer}>
        <ScrollView>
        <View
            style={styles.header}
        >
            <View
                style={styles.headerUpper}
            >
            <Image
            style={styles.topPic}
            source={require("../assets/profile.jpg")}
            >
                
            </Image>
            <Text
                style={styles.username}  
                >
                    Singh
                </Text>
            </View>
            <View
                style={styles.bottomHeader}
            >
                <Text
                    style={styles.bottomHeaderText}
                >
                    ABOUT{"\n"}
                    MADT Student{"\n"}
                    Lambton College Toronto
                </Text>
                <TouchableHighlight
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                        
                    >Follow +</Text>
                </TouchableHighlight>
            </View>
        </View>
        <View
            style={styles.feed}
        >   
            <View
                style={styles.profileDetails}
            >
                <View
                    style={styles.followers}
                >
                    <Text
                        style={styles.number}
                    >
                        500
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        Followers
                    </Text>
                </View>
                <View
                    style={styles.following}
                >
                    <Text
                        style={styles.number}
                    >
                        500
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        Following
                    </Text>
                </View>
                <View
                    style={styles.postNumber}
                >
                    <Text
                        style={styles.number}
                    >
                        50
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        Posts
                    </Text>
                </View>
            </View>
            <View
                style={styles.posts}
            >
                {/* <View
                    style={styles.post}
                > */}
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                    <Image source={require('../assets/painting.jpg')} style={styles.postImg}/>
                {/* </View> */}
            </View>
        </View>
        </ScrollView>
        
        <View
            style={styles.footer}
        >
            <TouchableHighlight
                onPress={() =>
                navigation.navigate('Home')}
                    style={styles.bottomIcons}
            >
                <Image source={require('../assets/home.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
                    style={styles.bottomIcons}
            >
                <Image source={require('../assets/search.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
                    style={styles.bottomIcons}
            >
                <Image source={require('../assets/plus.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
                    style={styles.bottomIcons}
            >
                <Image source={require('../assets/bell.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
            <TouchableHighlight
                    style={styles.bottomIcons}
            >
                <Image source={require('../assets/user.png')} style={styles.bottomIcon}/>
            </TouchableHighlight>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        flexDirection:'column',
        height:"100%",
    },
    header: {
        height:350,
        // justifyContent:'center',
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20,
    },
    headerUpper:{
        alignItems:'center',
        marginBottom:50
    },
    feed:{
        backgroundColor: 'white',
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'#F2F0EC'
    },
    footer:{
        height:100,
        paddingTop:30,
        // width: "100%",
        flexDirection: 'row',
        // paddingLeft:10,
        // paddingRight:10,
        // flex:1,
        justifyContent: 'space-evenly',
    },
    bottomIcons:{
        backgroundColor:'white',
        height:40,
        paddingTop:5,
        width:40,
        paddingLeft:7,
        borderRadius:50,
    },
    bottomIcon:{
        height:26,
        width:26
    },
    topPic:{
        borderRadius: 1000,
        height:125,
        width:125
    },
    username:{
        fontSize:25,
        color:'white',
        marginTop:10,
        fontWeight:'bold'
    },
    bottomHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomHeaderText:{
        color:'white',
        fontSize:15
    },
    button:{
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        paddingLeft:20,
        paddingRight:20
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    profileDetails:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    followers:{
        alignItems:'center',
    },
    following:{
        alignItems:'center'
    },
    postNumber:{
        alignItems:'center'
    },
    number:{
        fontWeight:'bold'
    },
    posts:{
        backgroundColor:'white',
        padding:10,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    postImg:{
        margin:5,
        width:"30%",
        height:100
    }
});
