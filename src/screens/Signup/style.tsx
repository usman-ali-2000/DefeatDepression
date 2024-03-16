import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        height:hp('100%'),
        width:wp('100%'),
        alignItems:'center',
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
        fontSize:16,
        fontFamily:'Raleway-SemiBold',
        color: theme.colors.yellow,
        width:'100%',
        padding:'1%'
    },
    yellowText:{
        fontSize:11,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.yellow,
        padding:'1%',
        width:'100%'
    },
    text:{
        fontSize:11,
        fontFamily:'Raleway-Medium',
        color:theme.colors.white,
        width:'100%',
        padding:'1%'
    },
    textContainer:{
        width:'90%',
        marginTop:'8%'
    },
    inputContainer:{
        width:'100%',
        alignItems:'center',
        marginVertical:'8%',
    }
})
export default styles;