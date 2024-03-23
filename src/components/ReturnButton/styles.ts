import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

export default StyleSheet.create({
  return: {
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  arrow: {
    color: colors.blue,
    fontSize: 15,
  },
});
