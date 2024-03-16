import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import * as Progress from "react-native-progress";
import theme from "../../theme/GlobalTheme";

const Home=()=>{

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const itemData = [
        {
            id:0,
            text1:'Healthy  activities',
            text2:'Take a Break Every Hour',
        },{
            id:1,
            text1:'Mindfulness activities',
            text2:'Body scan Meditation',
        },{
            id:2,
            text1:'Mindfulness activities',
            text2:'Journaling',
        },{
            id:3,
            text1:'Relaxation activities',
            text2:'4-7-8 Breathing Technique ',
        }
    ]

    const [happy, setHappy] = useState(false);
    const [sad, setSad] = useState(false);
    const [angry, setAngry] = useState(false);
    const [calm, setCalm] = useState(false);
    const [anxiety, setAnxiety] = useState(false);

    const HandleHappy=()=>{
        setHappy(true);
        setSad(false);
        setAngry(false);
        setCalm(false);
        setAnxiety(false);
    }
    const HandleSad=()=>{
        setHappy(false);
        setSad(true);
        setAngry(false);
        setCalm(false);
        setAnxiety(false);
    }
    const HandleAngry=()=>{
        setHappy(false);
        setSad(false);
        setAngry(true);
        setCalm(false);
        setAnxiety(false);
    }
    const HandleCalm=()=>{
        setHappy(false);
        setSad(false);
        setAngry(false);
        setCalm(true);
        setAnxiety(false);
    }
    const HandleAnxiety=()=>{
        setHappy(false);
        setSad(false);
        setAngry(false);
        setCalm(false);
        setAnxiety(true);
    }


    return(
        <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <Text style={styles.heading}>How are you feeling now?</Text>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={HandleHappy} style={[styles.happyContainer,{borderWidth:happy?1:0}]}>
                    <View style={[styles.happyBack,{backgroundColor:'rgba(255, 164, 164, 0.5)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/happy.png')}/>
                    </View>
                    <Text style={styles.happyText}>Happy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HandleSad} style={[styles.happyContainer,{borderWidth:sad?1:0}]}>
                    <View style={[styles.happyBack,{backgroundColor:'rgba(165, 235, 98, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/sad.png')}/>
                    </View>
                    <Text style={styles.happyText}>Sad</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HandleAngry} style={[styles.happyContainer,{borderWidth:angry?1:0}]}>
                    <View style={[styles.happyBack,{backgroundColor:'rgba(254, 172, 126, 0.7)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/angry.png')}/>
                    </View>
                    <Text style={styles.happyText}>Angry</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HandleCalm} style={[styles.happyContainer,{borderWidth:calm?1:0}]}>
                    <View style={[styles.happyBack,{backgroundColor:'rgba(196, 150, 255, 0.5)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/calm.png')}/>
                    </View>
                    <Text style={styles.happyText}>Calm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HandleAnxiety} style={[styles.happyContainer,{borderWidth:anxiety?1:0}]}>
                    <View style={[styles.happyBack,{backgroundColor:'rgba(105, 214, 238, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/anxiety.png')}/>
                    </View>
                    <Text style={styles.happyText}>Anxiety</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.PlanContainer}>
                <Text style={styles.myPlan}>My plan</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.progressText}>End Stress/ anxiety . week 1 </Text>
        <Progress.Bar 
        color={theme.colors.yellow} 
        borderWidth={0} 
        unfilledColor={theme.colors.lightgrey} 
        progress={0.17} 
        width={width*0.9}
        />
        <View style={styles.behaviorContainer}>
            <View style={styles.dayContainer}>
            <View style={{flexDirection:'row', marginTop:'2%', alignItems:'center'}}>
            <Text style={styles.dayText}>Day 6</Text>
            <Text style={styles.behaviorText}>Behaviour</Text>
            </View>
            <Text style={styles.restText}>Rest and relaxation</Text>
            <TouchableOpacity style={styles.continueContainer}>
                <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
            </View>
            <Image style={styles.behaviorImage} source={require('../../assets/images/behavior.png')}/>
        </View>
            <View style={[styles.PlanContainer, {marginTop:'5%'}]}>
                <Text style={styles.myPlan}>Today,s activities</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', width:'90%', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={styles.progressText}>Total progress </Text>
            <Text style={{fontSize:10, fontFamily:'Raleway-Medium', color:theme.colors.black}}>0/5</Text>
            </View>
        <Progress.Bar 
        color={theme.colors.yellow} 
        borderWidth={0} 
        unfilledColor={theme.colors.lightgrey} 
        progress={0} 
        width={width*0.9}
        />
        {itemData.map((item)=>(
        <TouchableOpacity style={styles.itemContainer}>
            <Image style={styles.dot} source={require('../../assets/images/grey-dot.png')}/>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemText1}>{item.text1}</Text>
                <Text style={styles.itemText2}>{item.text2}</Text>
            </View>
        </TouchableOpacity>
        ))}
        <Text style={[styles.myPlan,{width:'90%', paddingTop:'2%',}]}>Assessments</Text>
        <View style={styles.behaviorContainer}>
            <View style={styles.evaluationContainer}>
            <Text style={styles.evaluationText}>Your evaluation</Text>
            <Text style={styles.assessmentText}>Take an assessment to track your axviety, stress, and depression score</Text>
            <Text style={styles.assessment}>Take assessment</Text>
        </View>
        <Image style={{height:80, width:90}} source={require('../../assets/images/assessment.png')}/>
        </View>
        <TouchableOpacity style={styles.bottomContainer}>
            <Image style={styles.quick} source={require('../../assets/images/quick.png')}/>
            <View style={styles.quickContainer}>
                <Text style={styles.quickHeading}>Quick Relif</Text>
                <Text style={styles.quickText}>Relax and get back into the right mindspace</Text>
            </View>
            <Image style={styles.right} source={require('../../assets/images/right.png')}/>
        </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default Home;