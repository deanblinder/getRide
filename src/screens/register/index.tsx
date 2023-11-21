import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import usePresenter from './usePresenter';
import {
  View,
  Text,
  Button,
  Stack,
  FormControl,
  Input,
  ScrollView,
  Icon,
  Spinner,
  useTheme,
} from 'native-base';

// @ts-ignore
import { API_KEY } from '@env';
import { screenIds } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat';

import { Entypo } from '@expo/vector-icons';

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
    onFBPress,
  } = usePresenter();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const onHaveAccountPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.LOGIN_SCREEN, {});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="interactive"
      >
        <View>
          <Text fontSize={'3xl'} marginBottom={'10%'}>
            Enter Your Details
          </Text>
          <Stack space={5} w="100%" maxW="300px" mx="auto">
            <FormControl maxW="300px">
              <Input
                size={'xl'}
                placeholder={'Email'}
                onChangeText={onChangeEmail}
                variant={'underlined'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                size={'xl'}
                placeholder={'Enter Password'}
                type={'password'}
                onChangeText={onChangePassword}
                variant={'underlined'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                size={'xl'}
                placeholder={'Phone Number'}
                onChangeText={onChangePhoneNumber}
                variant={'underlined'}
                keyboardType={'numeric'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                size={'xl'}
                placeholder={'Facebook Link'}
                onChangeText={onChangeFacebookLink}
                variant={'underlined'}
              />
              <FormControl.HelperText>
                Enter link so people see who you are.
              </FormControl.HelperText>
            </FormControl>
            <Button
              // borderRadius={10}
              backgroundColor={colors.blue['500']}
              onPress={onFBPress}
              leftIcon={<Icon as={Entypo} name="facebook" size="lg" />}
            >
              <Text color={'white'} fontSize={'md'}>
                Login With Facebook
              </Text>
            </Button>
            {/*<LoginButton/>*/}
            <Button
              variant={'link'}
              colorScheme={'secondary'}
              onPress={onHaveAccountPressed}
            >
              Already have an account?
            </Button>
          </Stack>
        </View>
        <Button
          backgroundColor={'blue.400'}
          borderRadius={50}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? <Spinner color="white" /> : 'submit'}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    justifyContent: 'space-between',
    display: 'flex',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  inputs: {
    display: 'flex',
  },
  googleTextInput: {
    height: 40,
    backgroundColor: 'trasparent',
    marginVertical: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
  },
});
export default Register;
