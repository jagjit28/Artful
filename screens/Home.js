import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableHighlight, Touchable, Alert, ScrollView } from 'react-native';
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
            <Text
                style={styles.companyName}
            >
                ARTFUL
            </Text>
        </View>
        <View
            style={styles.feed}
        >   
            <View
                style={styles.post}
            >
                <View
                    style={styles.userDetails}
                >
                    <Image
                        style={styles.userPhoto}
                        source={require('../assets/profile.jpg')}
                    >

                    </Image>
                    <View
                        style={styles.userDetailsMain}
                    >
                        <Text
                            style={styles.userName}
                        >
                            Singh
                        </Text>
                        <Text
                            style={styles.location}
                        >
                            Toronto
                        </Text>
                        <Text
                            style={styles.timeline}
                        >
                            Posted 2 days Ago
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.feedDesc}
                >   
                    <Text>
                        Art washes away from the soul of dust.
                        ~Pablo
                    </Text>
                </View>
                <View
                    style={styles.feedImage}
                >
                    <Image
                        style={styles.feedImg}
                        source={require('../assets/painting.jpg')}
                    ></Image>
                </View>
                <View
                    style={styles.feedOptions}
                >
                    <TouchableHighlight
                        // style={styles.bottomIcons}
                    >
                        <View
                            style={styles.feedOption}
                        >
                            <Image source={require('../assets/heart.png')} style={styles.optionIcon}/>
                            <Text
                            style={styles.optionText} 
                            >
                                Like
                            </Text>
                        </View>
                        
                    </TouchableHighlight>
                    <TouchableHighlight
                        // style={styles.bottomIcons}
                    >   
                        <View
                            style={styles.feedOption}
                        >
                            <Image source={require('../assets/chat.png')} style={styles.optionIcon}/>
                            <Text
                            style={styles.optionText} 
                            >
                                Comment
                            </Text>
                        </View>
                        
                    </TouchableHighlight>
                    <TouchableHighlight
                        // style={styles.bottomIcons}
                    >
                        <View
                            style={styles.feedOption}
                        >
                            <Image source={require('../assets/send.png')} style={styles.optionIcon}/>
                            <Text
                            style={styles.optionText} 
                            >
                                Share
                            </Text>
                        </View>
                        
                    </TouchableHighlight>
                </View>
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
                    onPress={() =>
                        navigation.navigate('Profile')}
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
        height:80
    },
    companyName:{
        color:'white',
        fontSize: 40,
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:10
    },
    feed:{
        backgroundColor: 'white',
        flex:1,
        paddingLeft:20,
        paddingRight:20,
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
    userPhoto:{
        borderRadius:1000,
        width:50,
        height:50
    },
    post:{
        marginTop:30,
        marginBottom:50
    },
    userDetails: {
        flexDirection:'row',
        columnGap: 20,
        marginBottom:20,
    },
    userName: {
        fontSize:18,
        fontWeight:'bold'
    },
    location:{
        fontSize:14,
        color:'grey',
    },
    timeline:{
        fontSize:14,
        color:'grey',
    },
    feedDesc: {
        marginBottom:20
    },
    feedImg: {
        width: "100%",
        height: 300,
        borderRadius: 30
    },
    feedOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        borderWidth: 1,
        padding:5,
        borderRadius:50,
        paddingLeft:20,
        paddingRight:20
    },
    feedOption:{
        flexDirection:'row',
        columnGap:5,
        alignItems:'center'
    },
    optionIcon: {
        width:25,
        height:25
    },
});
