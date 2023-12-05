import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenIds } from '../constants';
import Register from '../screens/register';
import Login from '../screens/login';
import { useTheme } from 'native-base';
import { IS_IOS } from '../screens/offerOrEditRides/usePresenter';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const WelcomeStack: React.FC = () => {
  const { colors } = useTheme();
  const { i18n, t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerTitle: i18n.language === 'en' ? t('REGISTER.HEADER') : '',
        }}
        name={screenIds.REGISTER_SCREEN}
        component={Register}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerTitle: i18n.language === 'en' ? t('LOGIN.HEADER') : '',
        }}
        name={screenIds.LOGIN_SCREEN}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
