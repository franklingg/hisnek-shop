import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

export default StyleSheet.create({
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backdrop,
  },
  loadingView: {
    width: '50%',
    height: '50%',
  },
});
