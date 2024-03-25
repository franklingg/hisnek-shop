import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';
import {Portal} from 'react-native-portalize';

export default function Loading() {
  return (
    <Portal>
      <View style={styles.loading}>
        <LottieView
          source={require('~/assets/lottie/loading.json')}
          autoPlay
          loop
          speed={1.3}
          style={styles.loadingView}
        />
      </View>
    </Portal>
  );
}
