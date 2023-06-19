import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Input } from '@rneui/base';
import { navigationService } from '../../services';

const Register = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <View style={styles.inputs}>
        <Input label={'Enter First Name'} labelStyle={{ fontSize: 15 }} />
        <Input label={'Enter Last Name'} labelStyle={{ fontSize: 15 }} />
        <Input label={'Enter Email'} labelStyle={{ fontSize: 15 }} />
        <Input label={'Enter Password'} labelStyle={{ fontSize: 15 }} />
      </View>
      <Button radius={20} onPress={() => navigationService.pop()}>
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
