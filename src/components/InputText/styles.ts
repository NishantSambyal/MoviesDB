import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const TEXT_FIELD_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 14,
    backgroundColor: Colors.transparent,
    color: Colors.black,
  },
  iconPadding: {
    marginLeft: 20,
    paddingLeft: 10,
  },
  inputStyle: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: TEXT_FIELD_HEIGHT,
    // backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  secureTextIcon: {
    marginRight: 0,
    paddingRight: 0,
    height: 26,
    width: 26,
    marginTop: (TEXT_FIELD_HEIGHT - 16) / 2,
  },
  text: {
    paddingTop: 6,
    fontSize: 12,
    color: Colors.red,
    padding: 2,
  },
});

export default styles;
