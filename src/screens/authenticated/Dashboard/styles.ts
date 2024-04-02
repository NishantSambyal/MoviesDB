import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logoutButton: {
    backgroundColor: Colors.red,
  },
  moreDetailButton: {
    backgroundColor: 'skyblue',
    borderRadius: 2,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    paddingVertical: 5,
  },
  moreDetailText: {
    fontWeight: '500',
    fontSize: 12,
  },
  logoutButtonView: {
    marginTop: 20,
  },
});

export default styles;
