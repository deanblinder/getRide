import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import SearchStack from '../routes/searchStack';
import offerStack from '../routes/offerStack';
import RidesStack from '../routes/ridesStack';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name={'search'} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add"
        component={offerStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'add'} size={35} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Rides"
        component={RidesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'car'} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
