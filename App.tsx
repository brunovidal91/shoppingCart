import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import ContextComponent from './src/context';


export default function App(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <ContextComponent>

        <Stack.Navigator>


          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
            />

          
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false
            }}
            />

        </Stack.Navigator>
        
        </ContextComponent>
    </NavigationContainer>
  );
}