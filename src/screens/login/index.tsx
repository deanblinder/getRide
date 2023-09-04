import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { navigationService } from '../../services';
import usePresenter from './usePresenter';
import { Button, Input, Spinner, Stack } from 'native-base';

const Login = () => {
  const { handleLogin, onChangePassword, onChangeEmail, loading } =
    usePresenter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <View style={styles.inputs}>
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            size="lg"
            placeholder="Enter Email"
            onChangeText={onChangeEmail}
          />
          <Input
            size="lg"
            placeholder={'Enter Password'}
            onChangeText={onChangePassword}
            type={'password'}
          />
        </Stack>
      </View>
      <Button onPress={handleLogin} disabled={loading}>
        {loading ? <Spinner color="emerald.500" /> : 'submit'}
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
