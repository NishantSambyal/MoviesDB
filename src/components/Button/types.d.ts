import { ViewStyle } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  viewStyle?: ViewStyle;
}
