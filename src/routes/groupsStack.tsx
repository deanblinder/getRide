import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenIds from '../constants/screenIds';
import React from 'react';
import Groups from '../screens/groups';
import HeaderLogo from '../components/headerLogo';
import UserAvatar from '../components/userAvatar';
import { IS_IOS } from '../screens/offerOrEditRides/usePresenter';
import { useTheme } from 'native-base';

const Stack = createNativeStackNavigator();

const GroupsStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenIds.GROUPS_SCREEN}
        component={Groups}
        options={{
          headerTitle: '',
          headerLeft: () => <HeaderLogo />,
          headerRight: () => <UserAvatar />,
          headerShown: true,
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default GroupsStack;
