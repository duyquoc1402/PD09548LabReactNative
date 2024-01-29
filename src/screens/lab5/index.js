import { ImageBackground, StatusBar, Text, View } from "react-native"
import {styles } from "./style"

const Lab5 = () =>{
    return(
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
                source={require('../../assets/image/travel.jpg')}
                style={styles.image}>
                    <View style={styles.details}>
                        <Text style={styles.text}>
                            <Text style={styles.firstLine}>Discover {'\n'}</Text>
                            <Text style ={styles.secondLine}>world with us</Text>
                            
                        </Text>
                    </View>
                </ImageBackground>
        </View>
    );
};
export default Lab5;