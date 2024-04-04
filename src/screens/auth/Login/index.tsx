import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import TextInput from '@components/InputText';
import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  changeLanguage,
  getSelectedLanguage,
} from 'src/utils/Localization/languageHandler';
import { strings } from 'src/utils/Localization/localizer';
import { LanguageEnum } from 'src/utils/enums';
import { userLoggedIn } from 'src/utils/sessionManager';
import { emailValidation, passwordValidation } from 'src/utils/validations';
import styles from './styles';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('user@gmail.com');
  const [password, setPassword] = useState<string>('Pass@123');
  const [isEnglish, setIsEnglish] = useState<boolean>();
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const arabicLang = () => {
    changeLanguage(LanguageEnum.ar);
  };
  const engLang = () => {
    changeLanguage(LanguageEnum.en);
  };

  useEffect(() => {
    getSelectedLanguage().then(lang => {
      if (lang) {
        setIsEnglish(lang === LanguageEnum.en);
      }
    });
  }, []);

  useEffect(() => {
    setIsValidForm(emailValidation(email) && passwordValidation(password));
  }, [email, password]);

  const handleFormSubmit = async () => {
    userLoggedIn(email);
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{strings.loginScreen.hello}</Text>
          <View>
            <View style={styles.languageContainer}>
              <TouchableOpacity onPress={engLang}>
                <Text
                  style={[
                    styles.languageBtn,
                    isEnglish ? styles.activeBtn : styles.inActiveBtn,
                  ]}>
                  EN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={arabicLang}>
                <Text
                  style={[
                    styles.languageBtn,
                    isEnglish ? styles.inActiveBtn : styles.activeBtn,
                  ]}>
                  AR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.welcomeText}>
          {strings.loginScreen.welcome_msg}
        </Text>
        <TextInput
          viewStyle={styles.textInputView}
          label={strings.loginScreen.username}
          // eslint-disable-next-line jsx-quotes
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
          viewStyle={styles.topMargin40}
          label={strings.loginScreen.login}
          onPress={handleFormSubmit}
        />
      </View>
    </BaseScreen>
  );
};

export default Login;
