import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import LoginInput from "../../components/LoginInput";
import BottomButton from "../../components/BottomButton";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Signup=({navigation})=>{

    const [secureText, setSecureText] = useState(true);

    return(
        <ImageBackground 
        style={styles.container}
        source={require('../../assets/images/backImage.png')}
        resizeMode="cover"
        >
            <TouchableOpacity onPress={()=>navigation.goBack()}  style={styles.backContainer}>
            <Image style={styles.back} source={require('../../assets/images/back-white.png')}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
            <Text style={styles.heading}>Hey There</Text>
            <Text style={styles.yellowText}>Let’s create a smiling Mind account</Text>
            <Text style={styles.text}>We won’t share your information with anyone</Text>
            </View>
            <View style={styles.inputContainer}>
            <LoginInput text="First name" placeholder="Your first name" leftImage={require('../../assets/images/name.png')}/>
            <LoginInput text="Email" placeholder="Your email address" leftImage={require('../../assets/images/email.png')}/>
            <LoginInput text="Passsword" placeholder="8+ characters" leftImage={require('../../assets/images/lock.png')} showEye={true} secureText={secureText} handleEye={()=>{setSecureText(!secureText)}}/>
            </View>
            <View style={{width:'100%', alignItems:'center', marginTop:heightPercentageToDP('21%')}}>
            <BottomButton text="Create Account"/>
            </View>
        </ImageBackground>
    )
}
export default Signup;