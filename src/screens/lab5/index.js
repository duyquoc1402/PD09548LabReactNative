import { ImageBackground, StatusBar, Text, View } from "react-native"
import { style } from "../lab 3/styles"

const Lab5 = () =>{
    return(
        <View style = {style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground
                source={require('../../assets/image/travel.j')}
                style={style.Image}>
                    <View style={style.details}>
                        <Text style={style.text}>
                            <Text style={style.firstLine}>Discover {'\n'}</Text>
                            <Text style ={style.secondLine}>world with us</Text>
                            
                        </Text>
                    </View>
                </ImageBackground>
        </View>
    );
};
export default Lab5;