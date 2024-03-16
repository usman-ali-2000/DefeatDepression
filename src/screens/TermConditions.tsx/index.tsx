import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";
import SquareRadio from "../../components/SquareRadio";
import BottomButton from "../../components/BottomButton";


const TermConditions=({navigation})=>{

    const [term1, setTerm1] = useState(false);
    const [term2, setTerm2] = useState(false);

    return(
        <View style={styles.container}>
              <View style={styles.textContainer}>
            <Text style={styles.heading}>Thanks!</Text>  
            <Text style={styles.yellowText}>Before we move on, just a couple of things</Text>
            </View>
            <View style={{width:'100%', alignItems:'center', marginLeft:'2%'}}>
            <SquareRadio text="Receive helpful tips and tools to keep you going via email" onPress={()=>setTerm1(!term1)} tick={term1}/>
            </View>
            <View style={{width:'100%', alignItems:'center', marginLeft:'2%'}}>
            <SquareRadio text="Confirm you’re okay with our" underLine=" App Usage Term" onPress={()=>setTerm2(!term2)} tick={term2}/>
            </View>
            <Image style={styles.frame} source={require('../../assets/images/Frame.png')}/>
            <Text style={styles.bottomHeading}>All you need to get started os openness and curiosity</Text>
            <View style={{width:'100%', alignItems:'center', marginTop:'10%'}}>
            <BottomButton text="Next" onPress={()=>navigation.navigate('Describe')}/>
            </View>
      </View>
    )
}
export default TermConditions;