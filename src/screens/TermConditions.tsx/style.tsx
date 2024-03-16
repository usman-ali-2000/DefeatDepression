import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: theme.colors.white,
    },
    heading:{
        fontSize:20,
        fontFamily:'Raleway-Bold',
        color: theme.colors.yellow,
        width:'100%',
        padding:'1%'
    },
    yellowText:{
        fontSize:12,
        fontFamily:'Raleway-Bold',
        color:theme.colors.yellow,
        padding:'1%',
        width:'100%'
    },
    textContainer:{
        width:'90%',
        marginTop:'20%'
    },
    frame:{
        height:170,
        width:215,
        marginTop:'20%'
    },
    bottomHeading:{
        fontSize:20,
        fontFamily:'Raleway-Bold',
        color:theme.colors.yellow,
        width:250,
        textAlign:'center',
        marginTop:'5%'
    }
})
export default styles;