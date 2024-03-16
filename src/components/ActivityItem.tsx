import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";


type MyComponentProps={
    leftItem?:any;
    heading?:string;
    text?:string;
    showCircle?:boolean;
    showTime?:boolean;
    time?:string;
}

const ActivityItem:React.FC<MyComponentProps>=(props)=>{

    return(
        <TouchableOpacity style={styles.container}>
            <View style={{flexDirection:"row", alignItems:'center', justifyContent:'flex-start'}}>
                <View style={{width:60, height:80, alignItems:'center', justifyContent:'center'}}>
            {props.leftItem}
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.text}>{props.text}</Text>
            {props.showTime && <View style={styles.timeContainer}>
                <Image style={styles.clock} source={require('../assets/images/clock.png')}/>
                <Text style={styles.time}>{props.time}</Text>
            </View>}
            </View>
            </View>
            {props.showCircle?<Image style={styles.circle} source={require('../assets/images/wed.png')}/>
            :<Image style={styles.arrow} source={require('../assets/images/right.png')}/>}
        </TouchableOpacity>
    )
}
export default ActivityItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        justifyContent:'flex-start',
        borderWidth:1,
        height:73,
        borderRadius:6,
        borderColor:theme.colors.lightgrey,
        marginTop:'5%'
    },
    heading:{
        fontSize:8,
        fontFamily:'Raleway-Medium',
        color:theme.colors.grey,
    },
    text:{
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
        width:130
    },
    textContainer:{
        // borderWidth:1,
        width:'72%',
    },
    arrow:{
        height:10,
        width:5.5
    },
    circle:{
        height:18,
        width:18
    },
    timeContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    clock:{
        height:7,
        width:6
    },
    time:{
        fontSize:8,
        fontFamily:'Raleway-Medium',
        color:theme.colors.grey,
        paddingLeft:'2%'
    }
})