import React from 'react';
import { View, Text, Avatar, Spinner } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import typography from 'native-base/src/theme/base/typography';
import { Entypo } from '@expo/vector-icons';
import UserDetails from '../../components/userDetails';

const OfferingProfilePresenter = (props: Props) => {
  const { user, onFacebookPress } = usePresenter(props);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View flex={1} alignItems={'center'} marginBottom={'5%'}>
        <Avatar
          marginBottom={'5%'}
          size="xl"
          source={{
            uri: user?.profileImage,
          }}
        >
          {user?.profileImage
            ? undefined
            : user?.email.slice(0, 2).toUpperCase()}
        </Avatar>
        {(user?.firstName || user?.lastName) && (
          <Text fontSize={typography.fontSizes['2xl']}>
            {user?.firstName + ' ' + user?.lastName}
          </Text>
        )}
      </View>
      <UserDetails user={user!} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
});

export default OfferingProfilePresenter;
