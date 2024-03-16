import React, { useState } from "react";
import theme from "../../theme/GlobalTheme";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import BottomButton from "../../components/BottomButton";

const Meditate=({navigation})=>{

    const [morning, setMorning] = useState(false);
    const [time, setTime] = useState('7:00 pm');

    const handleMorning=()=>{
        setMorning(!morning);
    }

    const handleTime=(txt:string)=>{
        setTime(txt);
    }

    return(
        <ScrollView  style={{width:'100%'}} contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}  style={styles.backContainer}>
        <Image style={styles.back} source={require('../../assets/images/back-black.png')}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>When do you want to meditate?</Text>
            <Text style={styles.text}>Setting a regular time for meditation can help build a habit. You can change this later.</Text>
            </View>
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={()=>handleMorning()} style={styles.imageContainer}>
                {morning?<Image style={styles.image} source={require('../../assets/images/morning2.png')}/>:<Image style={styles.image} source={require('../../assets/images/morning.png')}/>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/day.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/evening.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.remindContainer}>
                <Text style={styles.remindText}>We’ll remind you at</Text>
                <TextInput
                value={time}
                onChangeText={handleTime}
                style={styles.time}/>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>No thanks</Text>
                </TouchableOpacity>
                <BottomButton text="Next" onPress={()=>navigation.navigate('BottomNav')}/>
            </View>
            </ScrollView>
    )
}
export default Meditate;
