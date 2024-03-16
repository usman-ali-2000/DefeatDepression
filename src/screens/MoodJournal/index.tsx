import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const MoodJournal=()=>{

    return(
        <ScrollView
        style={{width:'100%'}}
        contentContainerStyle={{width:'100%', alignItems:'center'}}>
        <View style={styles.container}> 
            <Text style={styles.heading}>Mood Journal</Text>
            <View style={{width:'90%', paddingTop:'3%'}}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Check in</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.date}>01-06 Friday</Text>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(255, 164, 164, 0.5)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/happy.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling great</Text>
                    <Text style={styles.time}>Now</Text>
                    </View>
                    <TouchableOpacity style={styles.dotsBack}>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
          <Text style={styles.text}>I had a walk with my parents in the city park. We had a great talk and the time spent was fantastic!</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.firstText}>Joy</Text>
                <Text style={styles.firstText}>Happy</Text>
            </View>
            </View>
            <Text style={styles.date}>01-06 Friday</Text>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(165, 235, 98, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/sad.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling sad</Text>
                    <Text style={styles.time}>20:41 PM</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.firstText}>Sadness</Text>
                <Text style={styles.firstText}>Lonely</Text>
            </View>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(255, 194, 102, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/okay.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling okay</Text>
                    <Text style={styles.time}>20:41 PM</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
            </View>
            <Text style={styles.date}>01-06 Friday</Text>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(254, 172, 126, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/angry.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling angrey</Text>
                    <Text style={styles.time}>20:41 PM</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(254, 172, 126, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/angry.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling angrey</Text>
                    <Text style={styles.time}>20:41 PM</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>     
                <View style={[styles.happyBack,{backgroundColor:'rgba(255, 194, 102, 0.8)'}]}>
                        <Image style={styles.happy} source={require('../../assets/images/okay.png')}/>
                    </View>
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading1}>Feeling okay</Text>
                    <Text style={styles.time}>20:41 PM</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={styles.dots} source={require('../../assets/images/dots.png')}/>
                    </TouchableOpacity>
          </View>
            </View>
           </View>
           </ScrollView>
    )
}
export default MoodJournal;