import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { navigationService } from '../../services';
import usePresenter from './usePresenter';
import {Button, Input, Stack} from "native-base";

const Login = () => {
  const { handleLogin } = usePresenter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <View style={styles.inputs}>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <Input size="lg" placeholder='Enter Email'></Input>
        <Input size="lg" placeholder={'Enter Password'} />
      </Stack>
      </View>
      <Button onPress={handleLogin}>
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
