import { ViewStyle } from 'react-native';

interface InputTextProps {
  label: string;
  maxLength?: number;
  keyboardType?: string | undefined;
  secureTextEntry?: boolean;
  viewStyle?: ViewStyle;
  placeholder?: string;
  onChange: (value: string) => void;
  error?: string;
}
