import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme/GlobalTheme";
import MyPlan from "../screens/MyPlan";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MoodJournal from "../screens/MoodJournal";
import Activity from "../screens/Activity";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomNav=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
        tabBarStyle:{
          height:hp(8.5),
        }, tabBarShowLabel:false,
        }}>
       <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabelStyle:{
                  height:'40%',
                 fontSize:12,
                 fontFamily:'OpenSans-Regular',
                },
                tabBarActiveBackgroundColor:theme.colors.white,
                tabBarActiveTintColor:theme.colors.darkBlue,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', borderBottomWidth:focused?1:0, borderColor:theme.colors.darkBlue, height:'80%'}}>
                <Image  style={styles.home} source={focused?require('../assets/images/home.png'):require('../assets/images/home1.png')}/>
                <Text style={{fontSize:7, fontFamily:'Raleway-SemiBold', marginTop:'2%',color:focused?theme.colors.darkBlue:theme.colors.grey}}>Home</Text>
                </View>
                ),
              }}name="Home" component={Home} />
              <Tab.Screen
                     options={{
                       headerShown: false,
                       tabBarLabelStyle:{
                         height:'40%',
                        fontSize:12,
                        fontFamily:'OpenSans-Regular',
                       },
                       tabBarActiveBackgroundColor:theme.colors.white,
                       tabBarActiveTintColor:theme.colors.darkBlue,
                       tabBarIcon: ({focused}) => (
                         <View style={{alignItems:'center', borderBottomWidth:focused?1:0, borderColor:theme.colors.darkBlue, height:'80%'}}>
                       <Image  style={styles.home} source={focused?require('../assets/images/myplan1.png'):require('../assets/images/myplan.png')}/>
                       <Text style={{fontSize:7, fontFamily:'Raleway-SemiBold', marginTop:'2%', color:focused?theme.colors.darkBlue:theme.colors.grey}}>My Plan</Text>
                       </View>
                       ),
                     }}name="My Plan" component={MyPlan} />
                     <Tab.Screen
                            options={{
                              headerShown: false,
                              tabBarLabelStyle:{
                                height:'40%',
                               fontSize:12,
                               fontFamily:'OpenSans-Regular',
                              },
                              tabBarActiveBackgroundColor:theme.colors.white,
                              tabBarActiveTintColor:theme.colors.darkBlue,
                              tabBarIcon: ({focused}) => (
                                <View style={{alignItems:'center', borderBottomWidth:focused?1:0, borderColor:theme.colors.darkBlue, height:'80%'}}>
                              <Image  style={styles.home} source={focused?require('../assets/images/mood1.png'):require('../assets/images/mood.png')}/>
                              <Text style={{fontSize:7, fontFamily:'Raleway-SemiBold', marginTop:'2%', color:focused?theme.colors.darkBlue:theme.colors.grey}}>Mood journal</Text>
                              </View>
                              ),
                            }}name="MoodJournal" component={MoodJournal} />
                            <Tab.Screen
                                   options={{
                                     headerShown: false,
                                     tabBarLabelStyle:{
                                       height:'40%',
                                      fontSize:12,
                                      fontFamily:'OpenSans-Regular',
                                     },
                                     tabBarActiveBackgroundColor:theme.colors.white,
                                     tabBarActiveTintColor:theme.colors.darkBlue,
                                     tabBarIcon: ({focused}) => (
                                       <View style={{alignItems:'center', borderBottomWidth:focused?1:0, borderColor:theme.colors.darkBlue, height:'80%'}}>
                                     <Image  style={styles.activity} source={focused?require('../assets/images/activity.png'):require('../assets/images/activity1.png')}/>
                                     <Text style={{fontSize:7, fontFamily:'Raleway-SemiBold', marginTop:'2%', color:focused?theme.colors.darkBlue:theme.colors.grey}}>Activities</Text>
                                     </View>
                                     ),
                                   }}name="Activity" component={Activity} />
                                   <Tab.Screen
                                          options={{
                                            headerShown: false,
                                            tabBarLabelStyle:{
                                              height:'40%',
                                             fontSize:12,
                                             fontFamily:'OpenSans-Regular',
                                            },
                                            tabBarActiveBackgroundColor:theme.colors.white,
                                            tabBarActiveTintColor:theme.colors.darkBlue,
                                            tabBarIcon: ({focused}) => (
                                              <View style={{alignItems:'center', borderBottomWidth:focused?1:0, borderColor:theme.colors.darkBlue, height:'80%'}}>
                                            <Image  style={styles.home} source={focused?require('../assets/images/profile.png'):require('../assets/images/profile1.png')}/>
                                            <Text style={{fontSize:7, fontFamily:'Raleway-SemiBold', marginTop:'2%', color:focused?theme.colors.darkBlue:theme.colors.grey}}>Profile</Text>
                                            </View>
                                            ),
                                          }}name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default BottomNav;

const styles = StyleSheet.create({
    home:{
        height:18,
        width:18,
        marginTop:'5%',
    },
    profile:{
        height:21,
        width:16
    },
    activity:{
      height:22,
      width:16
    }
})