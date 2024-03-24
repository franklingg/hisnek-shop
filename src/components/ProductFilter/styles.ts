import {StyleSheet} from 'react-native';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    ...commonStyle.bold,
    textAlign: 'center',
    fontSize: fonts.size.big,
  },
  field: {
    gap: 5,
  },
});
