import React from 'react';
import { View, Text, Avatar, Spinner } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import typography from 'native-base/src/theme/base/typography';

const OfferingProfilePresenter = (props: Props) => {
  const { user } = usePresenter(props);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        {/*<View>*/}
        <Avatar
          style={{ marginBottom: '5%' }}
          size="xl"
          bg="green.500"
          source={{
            uri: user?.profileImage,
          }}
        />
        {(user?.firstName || user?.lastName) && (
          <Text fontSize={typography.fontSizes['2xl']}>
            {user?.firstName + ' ' + user?.lastName}
          </Text>
        )}
      </View>
      <View>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Email: {user?.email.toLowerCase()}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Phone: {user?.phoneNumber}
        </Text>
        {user?.facebookLink && (
          <Text
            style={{ marginBottom: '2%' }}
            fontSize={typography.fontSizes['2xl']}
          >
            Facebook Link: {user?.facebookLink}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },
});

export default OfferingProfilePresenter;
