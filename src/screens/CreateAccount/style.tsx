import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    mainContainer:{
    height:hp('68%'),
    width:wp('100%'),
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:hp('15%')
    },
    container:{
        flex:1,
        alignItems:'center',
        width:wp('100%'),
        justifyContent:'center'
    },
    heading:{
        fontSize:32,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.white,
        width:200,
        marginRight:'25%',
        padding:'2%'
    },
    text:{
        fontSize:16,
        fontFamily:'Raleway-Regular',
        color:theme.colors.white,
        width:270,
        padding:'1%'
    },
    createContainer:{
        borderWidth:1,
        height:44,
        width:145,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        borderColor:theme.colors.borderColor,
        backgroundColor:theme.colors.darkBlue,
        // marginTop:hp('33%')
    },
    createText:{
        color:theme.colors.white,
        fontSize:12,
        fontFamily:'Raleway-SemiBold'
    },
    signinContainer:{
        height:24,
        width:65,
        backgroundColor:theme.colors.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        marginTop:'2%'
    },
    signinText:{
        color:theme.colors.darkBlue,
        fontSize:10,
        fontFamily:'Raleway-SemiBold'
    },
    textContainer:{
        width:'90%',
        // alignItems:'center',
        // marginRight:'12%',
        // marginTop:'50%'
    },
    buttonContainer:{
        width:wp('100%'),
          alignItems:'center',
    }

})
export default styles;