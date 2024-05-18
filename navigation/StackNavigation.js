
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Collection from '../screens/Collection';

function StackNavigation(){
const Stack = createStackNavigator();
return(
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Collection" component={Collection}/>
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}
export default StackNavigation;