import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
  if (dismiss)
    return (
      <Octicons name="x" size={24} color="black" onPress={onDismissPress} />
    );

  return (
    <Ionicons
      name="chevron-back-outline"
      size={24}
      color="black"
      onPress={onDismissPress}
    />
  );
};
export default BackButton;
