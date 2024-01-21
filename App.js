import React from 'react';
import {Text} from 'react-native';
import MyLab3 from './src/screens/lab 3';
import ViewComponent from './src/screens/lab 3';
import { create } from 'react-test-renderer';

const Stack = createNativeStackNavigator();
const App = () => {
  return <ViewComponent/>;
};

export default App;