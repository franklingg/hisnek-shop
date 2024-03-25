import {StyleSheet} from 'react-native';
import {commonStyle} from '~/styles';

export default StyleSheet.create({
  card: {
    gap: 8,
    alignItems: 'center',
    height: 250,
    minWidth: '50%',
  },
  image: {
    flex: 1,
    width: '90%',
    objectFit: 'contain',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  finalPrice: {
    ...commonStyle.text,
    fontWeight: 'bold',
  },
  title: {
    maxWidth: '60%',
    ...commonStyle.text,
    fontSize: 14,
  },
});
