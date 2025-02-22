// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#2C3E50', // Change this to your desired color
                },
                headerTintColor: '#fff', // This changes the color of the header text and back button
                headerTitleStyle: {
                    fontWeight: 'bold', // Optional: Make the title bold
                },
                headerShadowVisible: false
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Test" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;