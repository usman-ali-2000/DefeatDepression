import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    text?:string;
    onPress?:()=>void;
    tick?:boolean;
    underLine?:string;
}

const SquareRadio:React.FC<MyComponentProps>=(props)=>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
            <ImageBackground style={styles.square} source={require('../assets/images/square.png')}>
                {props.tick && <Image style={styles.tick} source={require('../assets/images/tick.png')}/>}
            </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.text}>{props.text}<TouchableOpacity><Text style={{textDecorationLine:'underline', fontSize:10, fontFamily:'Raleway-Regular', color:theme.colors.black}}>{props.underLine}</Text></TouchableOpacity></Text>
        </View>
    )
}
export default SquareRadio;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    square:{
        height:18,
        width:18,
        alignItems:'center',
        justifyContent:'center'
    },
    tick:{
        height:8,
        width:10
    },
    text:{
        fontSize:10,
        fontFamily:'Raleway-Regular',
        color:theme.colors.black,
        width:'65%',
        padding:'2%'
    },
    textContainer:{
        width:'70%', 
        borderWidth:1,
        flexDirection:'row'
    },
    underline:{
        width:'100%'
    }
})