import {StyleSheet} from 'react-native';
import {colors, commonStyle} from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'stretch',
  },
  filter: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lighterGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    ...commonStyle.text,
    textAlign: 'justify',
  },

  productGap: {
    height: 25,
  },
});
