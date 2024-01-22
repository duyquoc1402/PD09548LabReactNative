import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor : 'yellow',
        width : '90%',
        alignSelf: 'center',
        marginTop : '20',
        padding: 15,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'White',
        fontSize: 16, 
        marginTop :10 , 
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText:{
        fontStyle:'bold',
    },
    tipStyle: {
        borderWidth: 3,
        borderColor:'black',
        borderRadius: 10,
        marginHorizontal:15,
        marginTop:10,
    },
});