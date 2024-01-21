import { StyleSheet } from "react-native";

const ViewComponent = () =>{
    return(
        <View style ={style.container}>
        <Text style ={style.baseText}>
            Em vào đời bằng {' '}
        <Text style = {[styles.boldText, colorText ('red ')]}>vang đỏ</Text>
        </Text>
        </View>
        );
};
export default ViewComponent;

const colorText = (color) => ({
    color,
});
const style = StyleSheet.create({
    container: {
        backgroundColor : 'blue',
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
});