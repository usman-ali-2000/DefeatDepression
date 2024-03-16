import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const Onboarding=({navigation})=>{

    const data = [
        {
            text: "Start Your day positively by focusing on the good in your life",
            btnText:"Next"
        },{
            text: "Start Your day positively by focusing on the good in your life",
            btnText:"Next"
        },{
            text: "Start Your day positively by focusing on the good in your life",
            btnText:"Get Started"
        }
    ]
    let i = 0;
      
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState('');
    const [button, setButton] = useState('');

    const handleButton = () => {
        if (currentIndex < data.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }else{
          navigation.navigate('CreateAccount')
        }
      };
    
      useEffect(() => {
        setText(data[currentIndex].text);
        setButton(data[currentIndex].btnText);
      }, [currentIndex]);
    

    return(
           <ImageBackground 
            style={styles.image} 
            source={require('../../assets/images/Onboarding.png')}
            resizeMode="cover">
                <View style={styles.container}>
              <Text style={styles.text}>{text}</Text>
              <TouchableOpacity onPress={handleButton} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
              </View>
            </ImageBackground>
    )
}
export default Onboarding;