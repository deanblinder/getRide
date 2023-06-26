import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size="xl"
          bg="green.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
        <Text fontSize={typography.fontSizes['2xl']}>Dean Blinder</Text>
      </View>
      <View>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Email:{' '}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Phone:
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Address:{' '}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Age:
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Rides Given:
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Rating:
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Facebook:
        </Text>
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
    // flex: 1,
  },
});

export default Profile;
