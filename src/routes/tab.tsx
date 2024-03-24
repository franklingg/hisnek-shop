import React from 'react';

import {Home, Cart} from '~/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '~/styles';
import {useCart} from '~/contexts/cartContext';

export type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

function tabIcon(name: string) {
  return (props: {focused: boolean; color: string; size: number}) => (
    <MaterialIcons name={name} {...props} />
  );
}

export default function TabRouter() {
  const {cartItems} = useCart();
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {height: 78},
        tabBarLabelStyle: {
          fontFamily: fonts.family.bold,
          fontSize: fonts.size.small,
          paddingBottom: 15,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          title: 'Explorar',
          tabBarIcon: tabIcon('shopify'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: `Carrinho (${cartItems.length})`,
          tabBarIcon: tabIcon('shopping-cart-checkout'),
        }}
      />
    </Tab.Navigator>
  );
}
