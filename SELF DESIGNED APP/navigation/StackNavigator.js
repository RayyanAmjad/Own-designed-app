import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Screen3 from '../screens/Screen3';
import HomeScreen2 from '../screens/HomeScreen2';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='HomeScreen2'
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='HomeScreen2' component={HomeScreen2} />
			<Stack.Screen name='Screen3' component={Screen3} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
