import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import theme from "../../theme/GlobalTheme";
import ActivityItem from "../../components/ActivityItem";

const Activity=()=>{


    const data=[
        {
            id:0,
            day:'Mon',
            dayNo:1,
            image:require('../../assets/images/monday.png'),
        },{
            id:1,
            day:'Tue',
            dayNo:2,
            image:require('../../assets/images/tue.png'),
        },{
            id:2,
            day:'Wed',
            dayNo:3,
            image:require('../../assets/images/wed.png'),
        },{
            id:3,
            day:'Thu',
            dayNo:4,
            image:require('../../assets/images/thu.png'),
        },{
            id:4,
            day:'Fri',
            dayNo:5,
            image:require('../../assets/images/empty-circle.png'),
        },{
            id:5,
            day:'Sat',
            dayNo:6,
            image:require('../../assets/images/empty-circle.png'),
        },{
            id:6,
            day:'Sun',
            dayNo:7,
            image:require('../../assets/images/empty-circle.png'),
        },{
            id:7,
            day:'Mon',
            dayNo:8,
            image:require('../../assets/images/empty-circle.png'),
        }
    ]

    const [select, setSelect] = useState();

    const handleDay=(id:any)=>{
        setSelect(id);
    }

    return(
        <ScrollView style={{width:'100%', flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:'10%', backgroundColor:theme.colors.white}}>
        <View style={styles.container}>
            <Text style={styles.heading}>Activities</Text>
            <Text style={styles.subHeading}>June 6 . 3 activities left</Text>
            <View style={styles.daysContainer}>
                <FlatList
                horizontal={true}
                contentContainerStyle={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>handleDay(item.id)} style={[styles.dayBlock,{borderColor:item.id === select?theme.colors.yellow:theme.colors.lightgrey}]}>
                            <Text style={styles.day}>{item.day}</Text>
                            <Text style={styles.dayNo}>{item.dayNo}</Text>
                                <Image style={styles.circle} source={item.image}/>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>
            <ActivityItem leftItem={<Image style={{height:80, width:60, marginTop:'20%'}} source={require('../../assets/images/activity01.png')}/>} heading="Healthy activity" text="Drink 8 glasses of water per day"/>
            <ActivityItem leftItem={<Image style={{height:32,width:40,}} source={require('../../assets/images/activity2.png')}/>} heading="Relaxation activity" text="Deep breathing" showTime={true} time="6:00 PM" showCircle={true}/>
            <ActivityItem leftItem={<Image style={{height:45,width:35,}} source={require('../../assets/images/activity3.png')}/>} heading="Healthy activity" text="Eat and healthy meal" showTime={true} time="7:00 PM"/>
            <ActivityItem leftItem={<Image style={{height:75, width:55, marginTop:'20%'}} source={require('../../assets/images/activity4.png')}/>} heading="Mindfulness activity" text="15 Minutes od doing something You Enjoy"/>
            <TouchableOpacity style={styles.addActivity}>
                <Text style={styles.addActivityText}>Add Activity</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default Activity;