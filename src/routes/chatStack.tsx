import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenIds } from '../constants';
import HeaderLogo from '../components/headerLogo';
import UserAvatar from '../components/userAvatar';
import { useTheme } from 'native-base';
import Chat from '../screens/chat';
import Conversation from '../screens/conversation';

const Stack = createNativeStackNavigator();

const OfferStack: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <HeaderLogo />,
          headerRight: () => <UserAvatar />,
          headerShown: true,
          headerStyle: { backgroundColor: colors.blue['50'] },
        }}
        name={screenIds.CHAT_SCREEN}
        component={Chat}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerRight: () => <UserAvatar />,
          headerShown: true,
          headerStyle: { backgroundColor: colors.blue['50'] },
        }}
        name={screenIds.CONVERSATION_SCREEN}
        // @ts-ignore
        component={Conversation}
      />
    </Stack.Navigator>
  );
};

export default OfferStack;
