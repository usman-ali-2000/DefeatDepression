import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
    },
    topContainer:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        height:83,
        borderRadius:5,
        backgroundColor:theme.colors.darkBlue,
        marginTop:'5%',
        justifyContent:'center',
    },
    pic:{
        height:45,
        width:45,
        borderRadius:30,
    },
    picContainer:{
      height:47,
      width:47,
      borderRadius:30,
      borderWidth:2,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'rgba(79, 109, 214, 1)',
    },
    name:{
        fontSize:14,
        fontFamily:'Raleway-Bold',
        color:theme.colors.white,
    },
    id:{
        fontSize:11,
        fontFamily:'Raleway-Regular',
        color:theme.colors.white,
    },
    profileTextContainer:{
        width:'72%',
        paddingLeft:'2%',
    },
    edit:{
        height:12,
        width:12,
        marginRight:'2%'
    }

})
export default styles;