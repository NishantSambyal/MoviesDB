import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  textInputView: {
    marginVertical: 8,
  },
  welcomeText: { fontSize: 22, fontWeight: 'bold', marginBottom: 150 },
  headerText: { fontSize: 40, fontWeight: 'bold' },
  languageContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    padding: 2,
  },
  topMargin40: { marginTop: 40 },
  languageBtn: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  inActiveBtn: {
    backgroundColor: 'white',
    color: 'black',
  },
  activeBtn: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export default styles;
