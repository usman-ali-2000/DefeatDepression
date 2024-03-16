import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import theme from "../../theme/GlobalTheme";
import BottomButton from "../../components/BottomButton";


const Age=({navigation})=>{

    const [ageSelect, setAgeSelect] = useState(false);

    return(
        <View style={styles.container}>
         <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}  style={styles.backContainer}>
        <Image style={styles.back} source={require('../../assets/images/back-black.png')}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>How old are you?</Text>
            <Text style={styles.text}>This help us personalise the app for you.</Text>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity onPress={()=>setAgeSelect(!ageSelect)} style={styles.ageContainer}>
                    <TextInput style={[styles.ageText,{color:ageSelect?theme.colors.yellow:'rgba(255, 216, 101, 1)'}]}
                    placeholder="18"
                    placeholderTextColor={'rgba(255, 216, 101, 1)'}
                    keyboardType="numeric"/>
            </TouchableOpacity>  
            <Text style={styles.yearText}>Years old</Text>
            </View>
            <View style={{flex:1, width:'100%', justifyContent:'flex-end', alignItems:'center', marginBottom:'20%'}}>
            <BottomButton text="Next" onPress={()=>navigation.navigate('Gender')}/>
            </View>
        </View>
    )
}
export default Age;