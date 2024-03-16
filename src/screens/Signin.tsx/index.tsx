import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import LoginInput from "../../components/LoginInput";
import BottomButton from "../../components/BottomButton";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Signin=({navigation})=>{

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
            <Text style={styles.heading}>Welcome back</Text>
            <Text style={styles.text}>sign in to continue your mindfulness journey</Text>
            </View>
            <View style={styles.inputContainer}>
            <LoginInput text="Email" placeholder="Your email address" leftImage={require('../../assets/images/email.png')}/>
            <LoginInput text="Passsword" placeholder="8+ characters" leftImage={require('../../assets/images/lock.png')} showEye={true} secureText={secureText} handleEye={()=>{setSecureText(!secureText)}}/>
            </View>
            <View style={styles.forgotContainer}>
            <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'100%', alignItems:'center', marginTop:heightPercentageToDP('35%')}}>
            <BottomButton text="Sign in" onPress={()=>navigation.navigate('TermConditions')}/>
            </View>
             </ImageBackground>
    )
}
export default Signin;