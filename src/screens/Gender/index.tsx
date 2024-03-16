import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import GenderItem from "../../components/GenderItem";
import BottomButton from "../../components/BottomButton";

const Gender=({navigation})=>{

    const [female, setFemale] = useState(false);
    const [male, setMale] = useState(false);
    const [nonBinary, setNonBinary] = useState(false);

    const handleFemale=()=>{
        setFemale(true);
        setMale(false);
        setNonBinary(false);
    }
    
    const handleMale=()=>{
        setFemale(false);
        setMale(true);
        setNonBinary(false);
    }
    
    const handleNonBinary=()=>{
        setFemale(false);
        setMale(false);
        setNonBinary(true);
    }

    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}  style={styles.backContainer}>
        <Image style={styles.back} source={require('../../assets/images/back-black.png')}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>Which most closely describes your gender?</Text>
            <Text style={styles.text}>This help us personalise the app for you.</Text>
            </View>
            <View style={styles.genderContainer}>
            <GenderItem text="Female" onPress={handleFemale} select={female}/>
            <GenderItem text="Male" onPress={handleMale} select={male}/>
            <GenderItem text="Non-Binary" onPress={handleNonBinary} select={nonBinary}/>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Interested')} style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>I’d rather not say</Text>
                </TouchableOpacity>
                <BottomButton text="Next" onPress={()=>navigation.navigate('Interested')}/>
            </View>
        </View>
    )
}
export default Gender;