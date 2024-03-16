import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        width:wp('90%'),
        alignItems:'center',
        height:hp(25),
        // position:'absolute',
        marginTop:hp('45%'),
        // paddingTop:'5%',
        backgroundColor:theme.colors.white,
        borderRadius:14,
        justifyContent:'center'
    },
    image:{
        flex:1,
        width:'100%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        fontFamily:'Raleway-Regular',
        width:210,
        textAlign:'center',
        color:theme.colors.black
    },
    buttonContainer:{
        height:36,
        width:111,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        backgroundColor:theme.colors.darkBlue,
        marginTop:'8%'
    },
    buttonText:{
        color:theme.colors.white,
        fontSize:12,
        fontFamily:'Raleway-SemiBold'
    }
})
export default styles;