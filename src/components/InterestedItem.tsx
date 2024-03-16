import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    text?:string;
}

const InterestedItem:React.FC<MyComponentProps>=(props)=>{

    const [select, setSelect] = useState(false);


    return(
        <TouchableOpacity onPress={()=>setSelect(!select)} style={[styles.container,{
            backgroundColor:select?theme.colors.yellow:theme.colors.background,}]}>
            <Text style={[styles.text,{color:select?theme.colors.white:theme.colors.yellow}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default InterestedItem;

const styles = StyleSheet.create({
    container:{
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:6,
        borderColor:theme.colors.yellow,
    },
    text:{
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
        textAlign:'center',
        textAlignVertical:'center',
        padding:'2%',
        paddingLeft:'5%',
        paddingRight:'5%',
    }
})