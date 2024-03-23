import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  textButton: {
    paddingHorizontal: 25,
  },
  iconButton: {
    width: 56,
  },
  disabled: {
    backgroundColor: colors.mediumGray,
  },
});
