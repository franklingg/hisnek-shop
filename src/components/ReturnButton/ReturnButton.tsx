import React, {useCallback} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Portal} from 'react-native-portalize';

export default function ReturnButton() {
  const navigation = useNavigation();

  const returnAction = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Portal>
      <TouchableOpacity style={styles.return} onPress={returnAction}>
        <AntDesign name="arrowleft" style={styles.arrow} />
      </TouchableOpacity>
    </Portal>
  );
}
