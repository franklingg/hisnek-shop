import {StyleSheet} from 'react-native';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    borderRadius: 30,
    maxWidth: '35%',
    objectFit: 'contain',
  },
  info: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    backgroundColor: colors.lightGray,
    padding: 5,
    borderRadius: 20,
  },
  deleteIcon: {
    color: colors.green,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    ...commonStyle.bold,
    fontSize: fonts.size.big,
    color: colors.black,
  },
});
