import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    back:{
        height:26,
        width:26,
    }, 
    backContainer:{
        marginTop:hp('5%'),
        width:wp('90%')
    },
    heading:{
        fontSize:16,
        fontFamily:'Raleway-SemiBold',
        color: theme.colors.yellow,
        width:'100%',
        padding:'1%'
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
        marginTop:'5%'
    },
    inputContainer:{
        width:'100%',
        alignItems:'center',
        marginTop:hp('2%')
    },
    forgotContainer:{
        width:'90%',
    },
    forgotText:{
        width:'100%',
        textAlign:'right',
        color:theme.colors.yellow,
    }
})
export default styles;