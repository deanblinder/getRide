import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import SearchStack from '../routes/searchStack';
import offerStack from '../routes/offerStack';
import RidesStack from '../routes/ridesStack';
import { tabIds } from '../constants';
import ChatStack from '../routes/chatStack';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={tabIds.SEARCH}
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name={'search'} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={tabIds.ADD}
        component={offerStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'add'} size={35} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={tabIds.RIDES}
        component={RidesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'car'} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={tabIds.CHAT}
        component={ChatStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
