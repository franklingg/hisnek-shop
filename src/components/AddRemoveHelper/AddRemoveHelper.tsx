import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type AddRemoveHelperProps = {
  currentValue: number;
  onIncrease: () => void;
  onDecrease: () => void;
  small?: boolean;
};

export default function AddRemoveHelper({
  currentValue,
  onIncrease,
  onDecrease,
  small = false,
}: AddRemoveHelperProps) {
  return (
    <View style={[styles.helper, small && styles.small]}>
      <TouchableOpacity onPress={onDecrease} disabled={currentValue === 0}>
        <AntDesign
          name="minus"
          style={[styles.button, currentValue === 0 && styles.disabledButton]}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{currentValue}</Text>
      <TouchableOpacity onPress={onIncrease}>
        <AntDesign name="plus" style={styles.button} />
      </TouchableOpacity>
    </View>
  );
}
