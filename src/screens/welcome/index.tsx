import { Text } from '@rneui/base';
import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import usePresenter from './usePresenter';
import { Button } from 'native-base';

const Welcome = () => {
  const { onHaveAccountPressed, onSignupPressed } = usePresenter();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: 'white' }}
    >
      <Text h1>Welcome</Text>
      <View>
        <Button style={{ marginBottom: '5%' }} onPress={onSignupPressed}>
          Sign Up
        </Button>
        <Button onPress={onHaveAccountPressed}>Already have account</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // display:"flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '5%',
  },
});

export default Welcome;
