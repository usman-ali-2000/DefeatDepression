import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";
import ToggleSwitch from "toggle-switch-react-native";

type MyComponentProps={
    icon?:any;
    name?:string;
    text?:string;
    showWarning?:boolean;
    showToggle?:boolean;
}

const ProfileItem:React.FC<MyComponentProps>=(props)=>{

    const [active, setActive] = useState(false);

    const handleToggle=()=>{
        setActive(!active);
    }

    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={props.icon}/>
            <View style={styles.textContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.text}>{props.text}</Text>
            </View>
            {props.showToggle !== true && <View style={{flexDirection:'row', alignItems:'center', }}>
            <View style={styles.warning}>
            {props.showWarning &&  <Image style={styles.warning} source={require('../assets/images/warning.png')}/>}
            </View>
            <View style={styles.arrowContainer}>
            <Image style={styles.arrow} source={require('../assets/images/right-grey.png')}/>
        </View>
        </View>}
        {props.showToggle && 
        // <TouchableOpacity>
        // <Image style={styles.toggle} source={require('../assets/images/toggle.png')}/>
        // </TouchableOpacity>
        <ToggleSwitch
        isOn={active}
        onColor={theme.colors.lightgrey}
        offColor={theme.colors.lightgrey}
        thumbOnStyle={{backgroundColor:theme.colors.yellow}}
        thumbOffStyle={{backgroundColor:theme.colors.yellow}}
        // label="Example label"
        // labelStyle={{ color: theme.colors.lightgrey, fontWeight: "900" }}
        size="small"
        onToggle={() => setActive(!active)}
      />
        }
        </TouchableOpacity>
    )
}
export default ProfileItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        height:40,
        marginTop:'5%'
    },
    icon:{
        height:40,
        width:40
    },
    name:{
        fontSize:13,
        fontFamily:'Raleway-Medium',
        color:theme.colors.black,
    },
    text:{
        fontSize:11,
        fontFamily:'Raleway-Regular',
        color:theme.colors.grey,
        // borderWidth:1,
        lineHeight:20
    },
    warning:{
        height:15,
        width:15
    },
    arrow:{
        height:12,
        width:7
    },
    textContainer:{
        // borderWidth:1,
        width:'72%',
        paddingLeft:'3%'
    },
    arrowContainer:{
        // borderWidth:1,
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center'
    },
    toggle:{
        height:22,
        width:38
    }
})