import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { navigationService } from '../../services';
import usePresenter from './usePresenter';
import {Button, Stack, Input} from "native-base";


const Register = () => {
  const {handleLogin} = usePresenter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <Input placeholder={'Enter First Name'} size="lg"/>
        <Input placeholder={'Enter Last Name'} size="lg" />
        <Input placeholder={'Enter Email'} size="lg" />
        <Input placeholder={'Enter Password'} size="lg"/>
        </Stack>
      <Button onPress={handleLogin}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    justifyContent: 'space-around',
    display: 'flex',
    flex: 1,
  },
  inputs: {
    display: 'flex',
    // marginHorizontal: '5%',
    // margin: '10%',
  },
});
export default Register;
