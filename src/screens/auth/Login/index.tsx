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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnglish, setIsEnglish] = useState();
  const [isValidForm, setIsValidForm] = useState(false);
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
            {strings.loginScreen.hello}
          </Text>
          <View>
            <View style={styles.languageContainer}>
              <TouchableOpacity onPress={engLang}>
                <Text
                  style={[
                    styles.languageBtn,
                    {
                      backgroundColor: isEnglish ? 'black' : 'white',
                      color: isEnglish ? 'white' : 'black',
                    },
                  ]}>
                  EN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={arabicLang}>
                <Text
                  style={[
                    styles.languageBtn,
                    {
                      backgroundColor: !isEnglish ? 'black' : 'white',
                      color: !isEnglish ? 'white' : 'black',
                    },
                  ]}>
                  AR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
      </View>
    </BaseScreen>
  );
};

export default Login;
