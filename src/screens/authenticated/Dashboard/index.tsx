import useNavigation from '@navigation/utility/useNavigation';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { clearSession } from 'src/utils/sessionManager';

const Dashboard: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          clearSession();
          // navigation.navigate(SCREENS.Login);
        }}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
