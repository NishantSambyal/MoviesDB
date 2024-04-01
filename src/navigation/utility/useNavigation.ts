import { useNavigation as useMyNavigation } from '@react-navigation/native';
import { ActivitiesStack } from './types';

const useNavigation = () => {
  const navigation = useMyNavigation<ActivitiesStack>();
  return navigation;
};

export default useNavigation;
