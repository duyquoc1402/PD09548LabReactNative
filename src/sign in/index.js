import React from 'react';
import {styles} from './styles';
import { Text, View } from 'react-native';
import AuthHeader from '../../../../components/AuthHeader';
import Input  from '../../../../components/InputText';

const SignUp =()=> {
    return(
        <View>
           <AuthHeader title="Sign up"/>
           <Input label="Name" placeholder="Example John"/>
           <Input label="Email" placeholder="example@gmail.com"/>
           <Input label="Password" placeholder="*********"/>
        </View>
    );
        
};
export default SignUp;