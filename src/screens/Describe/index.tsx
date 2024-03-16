import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import DescribeOption from "../../components/DescribeOption";
import BottomButton from "../../components/BottomButton";

const Describe=({navigation})=>{

    const [individual, setIndividual] = useState(false);
    const [educator, setEducator] = useState(false);
    const [parent, setParent] = useState(false);
    const [professional, setProfessional] = useState(false);

    return(
    <View style={styles.container}>
    <View style={styles.textContainer}>
            <Text style={styles.heading}>Which of the describe You?</Text>
            <Text style={styles.text}>Select as many as you’d like</Text>
            </View>
            <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
            <View style={styles.optionContainer}>
            <View style={styles.option}>
                <DescribeOption text="Individual" body={require('../../assets/images/body.png')} selected={individual} onPress={()=>setIndividual(!individual)}/>
            </View>
            <View style={styles.option}>
                <DescribeOption text="Educator" body={require('../../assets/images/body1.png')} selected={educator} onPress={()=>setEducator(!educator)}/>
            </View>
            </View>
            <View style={styles.optionContainer}>
            <View style={styles.option}>
                <DescribeOption text="Parent" body={require('../../assets/images/body2.png')} selected={parent} onPress={()=>setParent(!parent)}/>
            </View>
            <View style={styles.option}>
                <DescribeOption text="Professional" body={require('../../assets/images/body3.png')} selected={professional} onPress={()=>setProfessional(!professional)}/>
            </View>
            </View>
            </View>
            <View style={{width:'100%', alignItems:'center', marginTop:'35%'}}>
            <BottomButton text="Next" onPress={()=>navigation.navigate('Age')}/>
            </View>
        </View>
    )
}
export default Describe;