import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import TextInput from '@components/InputText';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { strings } from 'src/utils/Localization/localizer';
import { emailValidation, passwordValidation } from 'src/utils/validations';
import styles from '../styles';

const LoginScreen: FC<LoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  isValidForm,
  isEnglish,
  arabicLang,
  engLang,
  handleFormSubmit,
}) => {
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
                  {strings.dashboard.english}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={arabicLang}>
                <Text
                  style={[
                    styles.languageBtn,
                    isEnglish ? styles.inActiveBtn : styles.activeBtn,
                  ]}>
                  {strings.dashboard.arabic}
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
          value={email}
          keyboardType='email-address'
          onChangeText={setEmail}
          error={emailValidation(email) ? '' : strings.loginScreen.email_error}
        />
        <TextInput
          viewStyle={styles.textInputView}
          label={strings.loginScreen.password}
          value={password}
          maxLength={15}
          onChangeText={setPassword}
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

export default LoginScreen;
