// https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      // options={{title: 'Welcome'}}
    />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator  initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const App = () => {
  const authenticated = true;
  return (
    <NavigationContainer>
      {authenticated
      ? (<HomeStack />)
      : (<LoginStack />)}
    </NavigationContainer>
  );
};

export default App;