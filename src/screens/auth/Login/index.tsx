import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import TextInput from '@components/InputText';
import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { strings } from 'src/utils/Localization/localizer';
import { userLoggedIn } from 'src/utils/sessionManager';
import { emailValidation, passwordValidation } from 'src/utils/validations';
import styles from './styles';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  // const arabicLang = () => {
  //   changeLanguage(LanguageEnum.ar);
  // };
  // const engLang = () => {
  //   changeLanguage(LanguageEnum.en);
  // };

  useEffect(() => {
    setIsValidForm(emailValidation(email) && passwordValidation(password));
  }, [email, password]);

  const handleFormSubmit = async () => {
    userLoggedIn(email);
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
          onChange={value => {
            setEmail(value);
          }}
          error={emailValidation(email) ? '' : strings.loginScreen.email_error}
        />
        <TextInput
          viewStyle={styles.textInputView}
          label={strings.loginScreen.password}
          maxLength={15}
          onChange={value => {
            setPassword(value);
          }}
          secureTextEntry={true}
          error={
            passwordValidation(password)
              ? ''
              : strings.loginScreen.password_error
          }
        />
        <Button
          disabled={!isValidForm}
          viewStyle={{ marginTop: 40 }}
          label={strings.loginScreen.login}
          onPress={handleFormSubmit}
        />
        {/* <Button
          viewStyle={{ marginTop: 40 }}
          label={'Arabic'}
          onPress={arabicLang}
        />
        <Button
          viewStyle={{ marginTop: 40 }}
          label={'English'}
          onPress={engLang}
        /> */}
      </View>
    </BaseScreen>
  );
};

export default Login;
