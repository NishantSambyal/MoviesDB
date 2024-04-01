import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import TextInput from '@components/InputText';
import useNavigation from '@navigation/utility/useNavigation';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { checkLanguageHandler } from 'src/utils/Localization/languageHandler';
import { strings } from 'src/utils/Localization/localizer';
import { LanguageEnum } from 'src/utils/enums';
import styles from './styles';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleFormSubmit = () => {
    checkLanguageHandler(LanguageEnum.ar);
    // if (!emailValidation(email)) {
    //   Alert.alert('Invalid Email', 'Please enter a valid email address.');
    //   return;
    // }

    // if (!passwordValidation(password)) {
    //   Alert.alert(
    //     'Invalid Password',
    //     'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.',
    //   );
    //   return;
    // }
    // navigation.navigate(SCREENS.Success);
    // Perform further actions such as submitting the form
    // e.g., make an API call, navigate to another screen, etc.
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
          {strings.loginScreen.hello}
        </Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 150 }}>
          {strings.loginScreen.welcome_msg}
        </Text>
        <TextInput
          viewStyle={styles.textInputView}
          label={strings.loginScreen.username}
          keyboardType='email-address'
          onChange={setEmail}
          error={strings.loginScreen.email_error}
        />
        <TextInput
          viewStyle={styles.textInputView}
          label={strings.loginScreen.password}
          onChange={setPassword}
          secureTextEntry={true}
        />
        <Button
          viewStyle={{ marginTop: 40 }}
          label={strings.loginScreen.login}
          onPress={handleFormSubmit}
        />
      </View>
    </BaseScreen>
  );
};

export default Login;
