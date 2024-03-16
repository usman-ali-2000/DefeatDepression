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
        width:'100%',
        padding:'1%'
    },
    text:{
        fontSize:12,
        fontFamily:'Raleway-Medium',
        color:theme.colors.black,
        width:'100%',
        padding:'1%'
    },
    textContainer:{
        width:'90%',
        marginTop:'10%'
    },
    ageContainer:{
        height:80,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:theme.colors.yellow,
        borderRadius:6,
        backgroundColor:theme.colors.background,
        },
    ageText:{
        fontSize:38,
        fontFamily:'Lalezar-Regular',
        textAlign:'center', 
        flex:1,
        verticalAlign:'middle',
    },
    container2:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     width:wp('88%'),
     marginTop:hp('5%'),
    },
    yearText:{
        fontSize:20, 
        fontFamily:'Raleway-Bold',
        color:theme.colors.black,
        width:wp('66%'),
        paddingBottom:'5%',
    }
})
export default styles;