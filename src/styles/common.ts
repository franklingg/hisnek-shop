import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
  title: {
    fontSize: fonts.size.title,
    color: colors.black,
    fontFamily: fonts.family.bold,
    textAlign: 'center',
  },
  text: {
    fontSize: fonts.size.text,
    color: colors.gray,
    fontFamily: fonts.family.regular,
    textAlign: 'center',
  },
  hidden: {
    fontSize: fonts.size.small,
    color: colors.gray,
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  buttonText: {
    color: colors.lighterGray,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.text,
  },
  bold: {
    fontSize: fonts.size.text,
    color: colors.gray,
    fontFamily: fonts.family.bold,
  },
});
