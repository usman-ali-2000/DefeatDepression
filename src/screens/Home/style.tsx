import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
        paddingBottom:'10%'
    },
    heading:{
        width:'90%',
        paddingTop:'10%',
        color:theme.colors.black,
        fontSize:14,
        fontFamily:'Raleway-SemiBold'
    },
    happyBack:{
        height:44,
        width:42,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    happy:{
        height:24,
        width:24
    },
    happyText:{
        fontSize:12,
        fontFamily:'Raleway-Medium',
        color:theme.colors.black,
    },
    happyContainer:{
        height:81,
        width:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        borderColor:theme.colors.yellow,
    },
    topContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'95%',
        padding:'2%'
    },
    PlanContainer:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    myPlan:{
        fontSize:14,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
    },
    viewAll:{
        fontSize:10,
        fontFamily:'Raleway-Medium',
        color:theme.colors.darkBlue,
    },
    progressText:{
        width:'90%',
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
        color:'rgba(76, 76, 76, 1)',
        marginTop:'5%',
        padding:'2%',
        paddingLeft:0
    },
    behaviorContainer:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
        alignItems:'center',
        height:'13%',
        borderWidth:1,
        marginTop:'5%',
        paddingTop:'2%',
        paddingBottom:'0%',
        padding:'5%',
        borderRadius:8,
        borderColor:theme.colors.lightgrey,
    },
    behaviorImage:{
        height:76,
        width:100
    },
    dayText:{
        fontSize:8,
        fontFamily:'Raleway-Bold',
        backgroundColor:theme.colors.lightgrey,
        color:theme.colors.grey,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        padding:2,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:2
    },
    dayContainer:{
        flexDirection:'column',
        height:'100%',
        paddingTop:'4%',
    },
    behaviorText:{
        fontSize:8,
        fontFamily:'Raleway-Semibold',
        color:theme.colors.grey,
        textAlign:'center',
        alignItems:'center',
        textAlignVertical:'center',
        paddingLeft:'5%',
    },
    restText:{
        fontSize:12,
        fontFamily:'Raleway-Medium',
        color:theme.colors.black,
        paddingTop:'4%'
    },
    continueContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:24,
        borderRadius:2,
        width:64,
        backgroundColor:theme.colors.darkBlue,
        marginTop:'15%'
    },
    continue:{
        color:theme.colors.white,
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
    },
    itemContainer:{
        width:'90%',
        borderWidth:1,
        flexDirection:'row',
        marginTop:'5%',
        padding:'4%',
        alignItems:'center',
        borderRadius:6,
        borderColor:theme.colors.lightgrey,
    },
    dot:{
        height:16,
        width:16
    },
    itemText1:{
        fontSize:8,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
    },
    itemText2:{
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
    },
    itemTextContainer:{
        paddingLeft:'4%'
    },
    evaluationContainer:{
        height:'100%',
        justifyContent:'space-evenly'
    },
    evaluationText:{
        fontSize:12, 
        fontFamily:'Raleway-SemiBold', 
        color:theme.colors.black
    },
    assessmentText:{
        fontSize:8, 
        fontFamily:'Raleway-Medium', 
        color:theme.colors.black, 
        width:180
    },
    assessment:{
        fontSize:10, 
        fontFamily:'Raleway-SemiBold', 
        color:theme.colors.black
    },
    bottomContainer:{
        width:'90%',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:6,
        borderColor:theme.colors.lightgrey,
        alignItems:'center',
        marginBottom:'10%',
        height:54,
        marginTop:'5%',
        justifyContent:'space-evenly'
    },
    quick:{
        height:27,
        width:26
    },
    right:{
        height:11,
        width:6
    },
    quickContainer:{
        flexDirection:'column',
        // borderWidth:1,
        width:'70%'
    },
    quickHeading:{
        fontSize:10,
        fontFamily:'Raleway-SemiBold',
        color:theme.colors.black,
    },
    quickText:{
        fontSize:8,
        fontFamily:'Raleway-Medium',
        color:theme.colors.black,
        width:150
    }
})
export default styles;