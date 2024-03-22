import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Product as ProductPage, Splash} from '~/screens';
import TabRouter, {TabParamList} from './tab';
import {Product} from '~/services/types';

export type NavigationParamList = {
  Splash: undefined;
  Product: {product: Product};
} & TabParamList;

const Stack = createStackNavigator<NavigationParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={TabRouter}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={TabRouter}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Product"
          component={ProductPage}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
