import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import {
  changeLanguage,
  changeLanguageHandler,
} from 'src/utils/Localization/languageHandler';
import { LanguageEnum } from 'src/utils/enums';
import { userLoggedIn } from 'src/utils/sessionManager';
import { emailValidation, passwordValidation } from 'src/utils/validations';
import LoginScreen from './component/LoginScreen';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('user@gmail.com');
  const [password, setPassword] = useState<string>('Pass@123');
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const currentLanguage = useSelector(
    (state: RootState) => state.languageReducer.selectedLanguage,
  );
  const [isEnglish] = useState<boolean>(currentLanguage === LanguageEnum.en);
  useEffect(() => {
    changeLanguageHandler(currentLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const arabicLang = () => {
    changeLanguage(LanguageEnum.ar, dispatch);
  };
  const engLang = () => {
    changeLanguage(LanguageEnum.en, dispatch);
  };

  useEffect(() => {
    setIsValidForm(emailValidation(email) && passwordValidation(password));
  }, [email, password]);

  const handleFormSubmit = async () => {
    userLoggedIn(email);
  };

  return (
    <LoginScreen
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isValidForm={isValidForm}
      isEnglish={isEnglish}
      arabicLang={arabicLang}
      engLang={engLang}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default Login;
