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
    backgroundColor: Colors.skyBlue,
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
  moviesListMainRow: { flex: 1, marginHorizontal: 10 },
  moviesListMargin: { width: '100%', height: 160, borderRadius: 8 },
  moviesListDescContainer: { flex: 1, alignItems: 'flex-start' },
  boldText: { fontWeight: 'bold', paddingVertical: 10 },
  loadingIndicator: {
    marginVertical: 10,
  },
});

export default styles;
