import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import theme from "../../theme/GlobalTheme";


const CreateAccount=({navigation})=>{

    return(
        <ImageBackground 
        style={styles.container}
        source={require('../../assets/images/backImage.png')}
        >
            <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.heading}>Meditation made <Text style={{color:theme.colors.yellow}}>easy.</Text></Text>
            <Text style={styles.text}>Check in with yorself, with hundreds of free tailored programs for age 3+</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.createContainer}>
                <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')} style={styles.signinContainer}>
                <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    )
}
export default CreateAccount;