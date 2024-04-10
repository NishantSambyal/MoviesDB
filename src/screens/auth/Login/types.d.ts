interface LoginProps {
  engLang: () => void;
  arabicLang: () => void;
  isEnglish: boolean;
  email: string;
  password: string;
  handleFormSubmit: () => void;
  isValidForm: boolean;
  error: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
