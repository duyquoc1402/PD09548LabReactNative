import React from "react";
import {styles} from './styles'
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../../components/Button";



const Splash=()=>{
    return(
        <View style={styles.container}>
            <Image
            resizeMode= 'contant'
            style={styles.img}
            source={require('../../../assets/image/splash_image.png.png')}
            />
            <View style={styles.txt}>
            <Text style={styles.title}> You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            </View>
            <Button title={'Sign Up'}></Button>
            <Pressable>
                <Text style={styles.footerText}>Sign in</Text>
            </Pressable>

        </View>

    );
};
export default Splash;