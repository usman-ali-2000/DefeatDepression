import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
    },
    back:{
        height:26,
        width:26,
    }, 
    backContainer:{
        marginTop:'10%',
        width:'90%'
    },
    heading:{
        fontSize:20,
        fontFamily:'Raleway-Bold',
        color: theme.colors.yellow,
        width:'80%',
        padding:'1%'
    },
    text:{
        fontSize:12,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
        width:'100%',
        padding:'1%'
    },
    textContainer:{
        width:wp('90%'),
        marginTop:hp('3%'),
    },
    genderContainer:{
        width:'100%',
        alignItems:'center',
        marginVertical:'8%'
    },
    bottomContainer:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:hp('10%')
    },
    bottomText:{
        fontSize:14,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
        textAlign:'center',
        textAlignVertical:'center',
        height:30,
    },
    bottomTextContainer:{
        borderWidth:1,
        borderColor:theme.colors.yellow,
        height:42,
        padding:'3%',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    }
})
export default styles;