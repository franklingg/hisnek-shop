import {StyleSheet} from 'react-native';
import {colors, commonStyle} from '~/styles';

export default StyleSheet.create({
  helper: {
    flexDirection: 'row',
    backgroundColor: colors.lightGreen,
    gap: 23,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 28,
    color: colors.green,
  },
  disabledButton: {
    opacity: 0.2,
  },
  text: {
    ...commonStyle.bold,
    color: colors.black,
    fontSize: 20,
  },
});
