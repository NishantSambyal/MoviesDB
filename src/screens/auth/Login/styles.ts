import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textInputView: {
    marginVertical: 8,
  },
  languageContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    padding: 2,
  },
  languageBtn: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    // borderRadius: 8,
  },
});

export default styles;
