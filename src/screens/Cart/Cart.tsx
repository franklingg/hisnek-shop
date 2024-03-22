import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Logo from '../../assets/img/logo.svg';
import {NavigationParamList} from '~/routes';

type CartProps = NativeStackScreenProps<NavigationParamList, 'Cart'>;

export default function Cart({}: CartProps) {
  return (
    <View style={styles.background}>
      <Logo />
    </View>
  );
}
