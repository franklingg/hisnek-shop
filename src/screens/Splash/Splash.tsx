import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Logo from '../../assets/img/logo.svg';
import {NavigationParamList} from '~/routes';

type SplashProps = NativeStackScreenProps<NavigationParamList, 'Splash'>;

export default function Splash({navigation}: SplashProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Logo />
    </View>
  );
}
