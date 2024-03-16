import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    text?:string;
    body?:any;
    selected?:boolean;
    onPress?:()=>void;
}

const DescribeOption:React.FC<MyComponentProps>=(props)=>{


    return(
        <TouchableOpacity onPress={props.onPress} style={styles.backImage}>
        <ImageBackground style={props.selected?styles.backImage2:styles.backImage} source={props.selected?require('../assets/images/back2.png'):require('../assets/images/back1.png')}>
            <Image style={styles.body} source={props.body}/>
        <Image style={styles.ellipse} source={require('../assets/images/Ellipse.png')}/>
         <Text style={styles.text}>{props.text}</Text>
        </ImageBackground>
        </TouchableOpacity>
    )
}
export default DescribeOption;

const styles = StyleSheet.create({
    backImage:{
        height:134,
        width:140,
        alignItems:'center',
    },
    container:{
        height:134,
        width:140,
    },
    ellipse:{
        marginTop:'52%',
       width:140,
       height:60,
       position:'absolute',
    },
    body:{
        height:85,
        width:65,
        position:'absolute',
        zIndex:2,
        marginTop:'5%'
    },
    text:{
        fontSize:12,
        fontFamily:'Raleway-Bold',
        color:theme.colors.black,
        position:'absolute',
        marginTop:"75%",
        zIndex:2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    backImage2:{
    height:105,
    width:150,
    alignItems:'center',
    position:'absolute',
    marginLeft:'15%'
    }
})