import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    onPress?:()=>void;
    text?:string;
}

const BottomButton:React.FC<MyComponentProps>=(props)=>{

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default BottomButton;

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'90%',
        backgroundColor:theme.colors.darkBlue,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        borderColor:theme.colors.borderColor,
        borderWidth:1
    },
    text:{
        color: theme.colors.white,
        fontSize:14,
        fontFamily:'Raleway-SemiBold',
    }
})