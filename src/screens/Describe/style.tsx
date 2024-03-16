import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
    },
    heading:{
        fontSize:20,
        fontFamily:'Raleway-Bold',
        color: theme.colors.yellow,
        width:'70%',
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
        marginTop:'15%'
    },
    option:{
        height:134,
        width:140,
        justifyContent:'center',
        alignItems:'center'
    },
    optionContainer:{
        flexDirection:'row',
        width:'85%',
        justifyContent:'space-between',
        marginTop:'5%'
    }
})
export default styles;