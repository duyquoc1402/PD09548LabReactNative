import { StyleSheet, View , Text} from "react-native";
import {style} from'./styles'; 
import { useState } from "react";
import {TextInput} from 'react-native-gesture-handler';

const ViewComponent = () => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    return(
    <View style ={style.container}>
    <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ho ten"
        style={style.TipStyle}
    />
    <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Nhap so dien thoai"
        keyboardType="phone-pad"
        style={style.TipStyle}
    />
    <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Nhap mat khau"
        secureTextEntry={true}
        style={style.TipStyle}
    />    
        <Text style ={style.baseText}>
            Em vào đời bằng {' '}
        <Text style = {[style.boldText, colorText ('red')]}>vang đỏ</Text> anh vào đời bằng {' '}
        <Text style= {[style.boldText, colorText('orange')]}>nước trà</Text>
        </Text>
        {/*Line 2*/}
        <Text style ={style.baseText}>
            Bằng cơn mưa thơm {' '}
        <Text style= {[style.boldText,style.italicText]}>
            mùi đất{' '}
        </Text>{' '}
        và {' '}
        <Text style= {[style.boldText,style.italicText]}>bằng nước hoa mọc dại trước nhà
        </Text>
        </Text>
        {/*Line 3*/}
        <Text
        style={[
            style.baseText,
            style.italicText,
            style.boldText,
            colorText('gray'),
        ]}>
            Em vào đời bằng kế hoạch của anh anh vào đời bằng mộng mơ
        </Text>
        {/*Line 4*/}
        <Text style ={[style.baseText]}>
            Lý trí em là{' '}
            <Text 
            style={({
            TextDecorationLine : 'under Line',
            letterSpacing : 10,
            fontWeight: 'bold'
            })}>
            {' '}
            công cụ {' '}
            </Text>
            còn trái tim anh là
            <Text
            style={({
            TextDecorationLine : 'under Line',
            letterSpacing : 10,
            fontWeight: 'bold'
            })}>
            {' '}
            động cơ {' '}
            </Text>
        </Text>
        {/*Line 5*/}
        <Text style ={[style.baseText, ({textAlgin: 'right'})]}>
            Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình </Text>
        {/*Line 6*/}
        <Text 
        style={[
            style.baseText,
            ({
                textAlgin: 'center',
                fontWeight: 'bold',
                color:' orange ',
            }),
        ]}>
            Anh chỉ muốn chân tình mình đập đất không muốn đạp ai dưới chân mình 
        </Text>
        {/*Line 7*/}
        <Text 
        style={[
            style.baseText,
            ({
                fontWeight: 'bold',
                color:' black ',
            }),
        ]}>
            Em vào đời bằng <Text style ={colorText('yellow')}>đại lộ</Text> và con đường đó
            giờ <Text style ={colorText('red')}>vắng anh </Text>
        </Text>
        </View>
        );
};
export default ViewComponent;
const colorText = color => ({
    color,
});
