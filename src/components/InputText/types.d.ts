import { ViewStyle } from 'react-native';
import { TextInputProps } from 'react-native-paper';

interface InputTextProps extends TextInputProps {
  viewStyle?: ViewStyle;
  error?: string;
}
