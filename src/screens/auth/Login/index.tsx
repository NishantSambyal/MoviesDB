import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'src/redux/slices/userProfileSlice';
import { RootState } from 'src/redux/store';
import {
  changeLanguage,
  changeLanguageHandler,
} from 'src/utils/Localization/languageHandler';
import { LanguageEnum } from 'src/utils/enums';
import { emailValidation, passwordValidation } from 'src/utils/validations';
import LoginScreen from './component/LoginScreen';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
    if (currentLanguage === LanguageEnum.ar) {
      return;
    }
    changeLanguage(LanguageEnum.ar, dispatch);
  };
  const engLang = () => {
    if (currentLanguage === LanguageEnum.en) {
      return;
    }
    changeLanguage(LanguageEnum.en, dispatch);
  };

  useEffect(() => {
    setIsValidForm(emailValidation(email) && passwordValidation(password));
  }, [email, password]);

  const handleFormSubmit = async () => {
    dispatch(loginUser(email));
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
