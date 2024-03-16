import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import InterestedItem from "../../components/InterestedItem";
import BottomButton from "../../components/BottomButton";

const Interested=({navigation})=>{

    return(
        <View style={styles.container}>  
         <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}  style={styles.backContainer}>
        <Image style={styles.back} source={require('../../assets/images/back-black.png')}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>What are you most interested in?</Text>
            <Text style={styles.text}>Select as many as you’d like.</Text>
            </View>
            <View style={{width:'90%', marginTop:'5%'}}>
            <View style={{width:'97%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Managing Stress"/>
                <InterestedItem text="Mindfulness At Work"/>
            </View>
            <View style={{width:'94%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Mindfulness In Sport"/>
                <InterestedItem text="Mindfulness Eating"/>
            </View>
            <View style={{width:'92%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Improving Performance"/>
            </View>
            <View style={{width:'92%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Attention And Concentration"/>
            </View>
            <View style={{width:'92%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Improving Relationships"/>
            </View>
            <View style={{width:'92%', flexDirection:'row', justifyContent:'space-between', padding:'1%', marginTop:'1%'}}>
                <InterestedItem text="Mindfulness In Education"/>
            </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>I’d rather not say</Text>
                </TouchableOpacity>
                <BottomButton text="Next" onPress={()=>navigation.navigate('Meditate')}/>
            </View>
            </View>
    )
}
export default Interested;