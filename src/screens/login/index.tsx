import React from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import usePresenter from './usePresenter';
import {
  Button,
  Text,
  Input,
  Spinner,
  Stack,
  ScrollView,
  View,
  FormControl,
} from 'native-base';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const { handleLogin, onChangePassword, onChangeEmail, loading } =
    usePresenter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        keyboardDismissMode="interactive"
        contentContainerStyle={styles.container}
      >
        <View>
          <Text
            fontFamily={'Roboto-Regular'}
            fontSize={'3xl'}
            marginBottom={'10%'}
          >
            {t('LOGIN.ENTER_DETAILS')}
          </Text>
          <Stack space={4} w="100%" maxW="300px" mx="auto">
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('LOGIN.EMAIL')}
                onChangeText={onChangeEmail}
                variant={'underlined'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('LOGIN.PASSWORD')}
                onChangeText={onChangePassword}
                variant={'underlined'}
                type={'password'}
              />
            </FormControl>
          </Stack>
        </View>
        <Button
          backgroundColor={'blue.400'}
          onPress={handleLogin}
          disabled={loading}
          borderRadius={50}
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
    flex: 1,
  },
});
export default Login;
