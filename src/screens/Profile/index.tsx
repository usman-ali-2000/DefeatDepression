import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ProfileItem from "../../components/ProfileItem";

const Profile =()=>{

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
            <View style={styles.picContainer}>
                <Image style={styles.pic} source={require('../../assets/images/profile-pic.png')}/>
            </View>
            <View style={styles.profileTextContainer}>
            <Text style={styles.name}>sanya kaur chadha</Text>
            <Text style={styles.id}>@senltd</Text>
            </View>
            <TouchableOpacity>
                <Image style={styles.edit} source={require('../../assets/images/edit.png')}/>
            </TouchableOpacity>
            </View>
            <ProfileItem icon={require('../../assets/images/profile-icon.png')} name="My Account " text="Make changes to your account" showWarning={true}/>
            <ProfileItem icon={require('../../assets/images/profile-icon.png')} name="Saved Beneficiary" text="Connect emergency contacts"/>
            <ProfileItem icon={require('../../assets/images/lock-icon.png')} name="Face ID / Touch ID" text="Manage your device security" showToggle={true}/>
            <ProfileItem icon={require('../../assets/images/auth-icon.png')} name="Two-Factor Authentication" text="Further secure your account for safety"/>
            <ProfileItem icon={require('../../assets/images/logout-icon.png')} name="Log out" text="Further secure your account for safety"/>
            <View style={{width:'100%', alignItems:'center', marginTop:'20%'}}>
            <ProfileItem icon={require('../../assets/images/notification-icon.png')} name="Help & Support" />
            <ProfileItem icon={require('../../assets/images/favorite-icon.png')} name="Become a Ecsthetic Rep" />
            </View>
        </View>
    )
}
export default Profile;