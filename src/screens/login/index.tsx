import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Input } from '@rneui/base';
import { navigationService } from '../../services';
import usePresenter from './usePresenter';

const Login = () => {
  const { handleLogin } = usePresenter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <View style={styles.inputs}>
        <Input label={'Enter Email'} labelStyle={{ fontSize: 15 }} />
        <Input label={'Enter Password'} labelStyle={{ fontSize: 15 }} />
      </View>
      <Button radius={20} onPress={handleLogin}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10%',
    justifyContent: 'space-around',
    display: 'flex',
    flex: 1,
  },
  inputs: {},
});
export default Login;
