import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Logo from '../../assets/img/logo.svg';
import {NavigationParamList} from '~/routes';
import {commonStyle} from '~/styles';

type ProductProps = NativeStackScreenProps<NavigationParamList, 'Product'>;

export default function ProductPage({route}: ProductProps) {
  return <Text style={commonStyle.text}>{route.params.product.title}</Text>;
}
