import { ViewStyle } from 'react-native';

interface BaseScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollEnabled?: boolean;
}
