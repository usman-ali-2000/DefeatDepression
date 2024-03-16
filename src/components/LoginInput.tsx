import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyCompoentProps={
    text?: string;
    leftImage?:any;
    value?:string;
    onChange?:any;
    secureText?:boolean;
    showEye?:boolean;
    placeholder?:string;
    handleEye?:()=>void;
}

const LoginInput:React.FC<MyCompoentProps>=(props)=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={[styles.inputContainer]}>
                <Image style={styles.leftImage} source={props.leftImage}/>
                <TextInput placeholder={props.placeholder} placeholderTextColor={theme.colors.placeholder} style={[styles.input, {width: props.showEye? '70%': '80%'}]} secureTextEntry={props.secureText}/>
               {props.showEye &&  <TouchableOpacity onPress={props.handleEye}>
                {props.secureText?<Image style={styles.eye} source={require('../assets/images/open.png')}/>:<Image style={styles.eye} source={require('../assets/images/close.png')}/>}
                </TouchableOpacity>}
            </View>
        </View>
    )
}
export default LoginInput

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'2.5%'
    },
    inputContainer:{
        flexDirection:'row',
        backgroundColor:'rgba(217, 217, 217, 1)',
        height:47,
        borderRadius:4,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    leftImage:{
        height:18,
        width:18,
    },
    input:{
        height:47,
        color:theme.colors.black,
        fontSize:12,
        fontFamily:'Raleway-Regular'
    },
    eye:{
        height:11,
        width:16
    },
    text:{
        color:theme.colors.white,
        width:'100%',
        fontSize:14,
        fontFamily:'Raleway-SemiBold',
        padding:'1%',
        paddingLeft:0
    }
})