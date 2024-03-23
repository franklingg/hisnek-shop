import {StyleSheet} from 'react-native';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 200,
    alignItems: 'stretch',
    gap: 12,
  },
  image: {
    minHeight: '30%',
    width: '100%',
    objectFit: 'contain',
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  tagItem: {
    backgroundColor: colors.lightGreen,
    paddingHorizontal: 8,
    borderRadius: 10,
    ...commonStyle.text,
    fontSize: 12,
    fontWeight: 'bold',
    height: 20,
    flex: 0,
  },
  title: {
    ...commonStyle.title,
    textAlign: 'left',
  },
  price: {
    ...commonStyle.bold,
    fontSize: fonts.size.big,
    color: colors.black,
  },
  description: {
    marginTop: 16,
    flex: 1,
    ...commonStyle.text,
    textAlign: 'left',
  },
  actions: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    flexDirection: 'row',
    gap: 10,
  },
  addCart: {
    ...commonStyle.bold,
    color: colors.white,
  },
});
