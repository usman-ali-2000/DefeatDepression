import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

const Splash=({navigation})=>{

    
useEffect(()=>{
    setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000);
},[])

    return(
        <View style={styles.container}>
            <FastImage 
            style={styles.splash} 
            source={require('../../assets/images/splash.gif')}
            resizeMode="cover"/>
            </View>
    )


}
export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    splash:{
     height:'100%',
     width:'100%',
    }
})