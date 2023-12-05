import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

type Props = {
  dismiss?: boolean;
};

const BackButton = (props: Props) => {
  const { dismiss = false } = props;
  const navigation = useNavigation();

  const onDismissPress = () => {
    navigation.goBack();
  };

  return dismiss ? (
    <TouchableOpacity
      onPress={onDismissPress}
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Octicons name="x" size={24} color="black" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onDismissPress}
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons name="chevron-back-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};
export default BackButton;
