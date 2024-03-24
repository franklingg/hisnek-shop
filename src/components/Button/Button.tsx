import React, {PropsWithChildren} from 'react';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import styles from './styles';

type ButtonProps = PropsWithChildren<RectButtonProperties> & {
  type?: 'icon';
};

export default function Button(props: ButtonProps) {
  return (
    <RectButton
      {...props}
      activeOpacity={0.6}
      style={[
        styles.container,
        props.style,
        props.type ? styles.iconButton : styles.textButton,
        !props.enabled && props.enabled !== undefined && styles.disabled,
      ]}>
      {props.children}
    </RectButton>
  );
}
