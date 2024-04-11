interface LoginProps {
  engLang: () => void;
  arabicLang: () => void;
  isEnglish: boolean;
  email: string;
  password: string;
  handleFormSubmit: () => void;
  isValidForm: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
