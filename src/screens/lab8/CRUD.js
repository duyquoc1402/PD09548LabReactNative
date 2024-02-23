import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import ListUser from "./ListUser";
import AddUser from "./AddUser";
import { styles } from "./styles";

const Crud = ()=>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListUser" component={ListUser} />
                <Stack.Screen name="AddUser" component={AddUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Crud;