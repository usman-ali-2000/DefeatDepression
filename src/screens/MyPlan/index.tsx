import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import theme from "../../theme/GlobalTheme";
import { widthPercentageToDP } from "react-native-responsive-screen";

const MyPlan=()=>{

    const weekData = [
        {
            id:0,
            text:'Week 1',
        },{
            id:1,
            text:'Week 2',
        },{
            id:2,
            text:'Week 3',
        },{
            id:3,
            text:'Week 4',
        },{
            id:4,
            text:'Week 5',
        }
    ]

    const weekDetail=[
        {
            id:0,
            day:'day 1',
            toptext:'Introduction',
            text:'Your First day at Defeat Depression',
            image:<Image style={styles.day1Image} source={require('../../assets/images/day1.png')}/>
        },{
            id:1,
            day:'day 2',
            toptext:'Behaviour',
            text:'Working out',
            image:<Image style={styles.day2Image} source={require('../../assets/images/day2.png')}/>
        },{
            id:2,
            day:'day 3',
            toptext:'Behaviour',
            text:'Focused Thinking',
            image:<Image style={styles.day3Image} source={require('../../assets/images/day3.png')}/>
        },{
            id:3,
            day:'day 4',
            toptext:'Behaviour',
            text:'Focused Thinking',
            image:<Image style={styles.day2Image} source={require('../../assets/images/day4.png')}/>
        }
    ]
 
    const [select, setSelect] = useState(0);

    const hanldeWeek=(id:number)=>{
          setSelect(id);
    }


    return(
        <ScrollView style={{width:'100%'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width:'100%', alignItems:'center'}}>
        <View style={styles.container}>
            <View style={styles.headingContainer}>
            <Text style={styles.heading} >My plan </Text>
            <Text style={styles.subHeading}>Explore daily step-by-step excercise,guidance, and tips for a calmer mind.</Text>
        </View>
        <View style={styles.container2}>
        {weekData.map((item)=>(
        <TouchableOpacity onPress={()=>hanldeWeek(item.id)} style={[styles.weekContainer,{backgroundColor:item.id === select ?theme.colors.darkBlue:theme.colors.white}]}>
            <Text style={[styles.week, {color:item.id === select ?theme.colors.white:theme.colors.black}]}>{item.text}</Text>
        </TouchableOpacity>))}
        </View>
        <View style={{flex:1, width:'100%', alignItems:'center', marginBottom:'5%'}}>
        {
        weekDetail.map((item)=>(
        <View style={{width:'100%',height:140, alignItems:'center', justifyContent:'space-between', elevation:5}}>
        <View style={styles.behaviorContainer}>
            <View style={styles.dayContainer}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.dayText}>{item.day}</Text>
            <Text style={styles.behaviorText}>{item.toptext}</Text>
            <View style={styles.dot}>
                <Image style={styles.tick} source={require('../../assets/images/tick-white.png')}/>
            </View>
            </View>
            <Text style={styles.restText}>{item.text}</Text>
            <TouchableOpacity>
                <Text style={styles.continue}>Do it again</Text>
                </TouchableOpacity>
            </View>
            {item.image}
        </View>
        </View>))}
        </View>
        </View>
        </ScrollView>
    )
}
export default MyPlan;