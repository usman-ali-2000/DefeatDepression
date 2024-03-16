import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    text?:string;
    onPress?:()=>void;
    select?:boolean;
}

const GenderItem:React.FC<MyComponentProps>=(props)=>{

    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.container,{borderColor:props.select?theme.colors.yellow:theme.colors.lightgrey, backgroundColor:props.select?theme.colors.yellow:theme.colors.white}]}>
            <Text style={[styles.text,{color:props.select?theme.colors.white:theme.colors.black}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default GenderItem;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignItems:'center',
        borderWidth:1,
        height:50,
        borderRadius:6,
        justifyContent:'center',
        marginTop:'3%'
    },
    text:{
        width:'90%',
        fontSize:14,
        fontFamily:'Raleway-Bold',
    }
})