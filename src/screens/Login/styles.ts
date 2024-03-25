import {StyleSheet} from 'react-native';
import {colors, commonStyle, fonts} from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 75,
    gap: 18,
    backgroundColor: colors.white,
  },
  title: {
    ...commonStyle.title,
    color: colors.orange,
    fontSize: 40,
    maxWidth: '50%',
    lineHeight: 45,
    alignSelf: 'center',
    marginBottom: 50,
  },
  heading: {
    ...commonStyle.bold,
    textAlign: 'center',
    fontSize: fonts.size.big,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.mediumGray,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  inputError: {
    borderColor: colors.red,
  },
  inputLabel: {
    ...commonStyle.tiny,
    color: colors.green,
  },
  inputLabelError: {
    color: colors.red,
  },
  inputField: {
    ...commonStyle.text,
    textAlign: 'left',
    padding: 0,
  },
  error: {
    ...commonStyle.text,
    color: colors.red,
  },
  confirm: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 30,
    backgroundColor: colors.green,
  },
  confirmText: {
    ...commonStyle.bold,
    color: colors.white,
  },
  guest: {
    ...commonStyle.text,
    fontWeight: 'bold',
    color: colors.blue,
    textDecorationLine: 'underline',
  },
});
