import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type AddRemoveHelperProps = {
  currentValue: number;
  onChangeValue: (change: number) => void;
};

export default function AddRemoveHelper({
  currentValue,
  onChangeValue,
}: AddRemoveHelperProps) {
  return (
    <View style={styles.helper}>
      <TouchableOpacity
        onPress={() => onChangeValue(-1)}
        disabled={currentValue === 0}>
        <AntDesign
          name="minus"
          style={[styles.button, currentValue === 0 && styles.disabledButton]}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{currentValue}</Text>
      <TouchableOpacity onPress={() => onChangeValue(1)}>
        <AntDesign name="plus" style={styles.button} />
      </TouchableOpacity>
    </View>
  );
}
