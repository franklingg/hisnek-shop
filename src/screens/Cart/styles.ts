import {StyleSheet} from 'react-native';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  container: {
    minHeight: '100%',
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  title: {
    ...commonStyle.bold,
    fontSize: fonts.size.big,
    textAlign: 'center',
    color: colors.black,
  },
  cardSeparator: {
    borderColor: colors.lighterGray,
    borderWidth: 2,
    marginVertical: 16,
  },
  comments: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    textAlignVertical: 'top',
    ...commonStyle.text,
    textAlign: 'left',
  },
  ship: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  shipValue: {
    ...commonStyle.text,
    color: colors.green,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    ...commonStyle.title,
    fontSize: fonts.size.big,
  },
  continue: {
    ...commonStyle.bold,
    color: colors.white,
  },
  emptyBanner: {
    height: '40%',
    marginVertical: 25,
  },
  emptyTitle: {
    ...commonStyle.bold,
    textAlign: 'center',
    marginBottom: 15,
  },
});
