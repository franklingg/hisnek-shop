import {StyleSheet} from 'react-native';
import {Styles} from 'react-native-sectioned-multi-select';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 20,
  },
  title: {
    ...commonStyle.bold,
    textAlign: 'center',
    fontSize: fonts.size.big,
  },
  field: {
    gap: 10,
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  priceInput: {
    borderColor: colors.orange,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  chipsWrapper: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    minHeight: 40,
    padding: 10,
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.lightGray,
  },
  actions: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  confirm: {
    height: 45,
  },
  confirmText: {
    ...commonStyle.bold,
    color: colors.white,
  },
});

export const tagsStyles: Styles = {
  container: {
    maxHeight: '40%',
    padding: 25,
    marginTop: 150,
  },
};
