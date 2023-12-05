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
import { Entypo } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
    onFBPress,
    onHaveAccountPressed,
    isFacebookLoading,
  } = usePresenter();

  const { t, i18n } = useTranslation();
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="interactive"
      >
        <View>
          <Text
            fontFamily={'Roboto-Regular'}
            fontSize={'3xl'}
            marginBottom={'10%'}
          >
            {t('REGISTER.ENTER_DETAILS')}
          </Text>
          <Stack space={5} w="100%" maxW="300px" mx="auto">
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('REGISTER.EMAIL')}
                onChangeText={onChangeEmail}
                variant={'underlined'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('REGISTER.PASSWORD')}
                type={'password'}
                onChangeText={onChangePassword}
                variant={'underlined'}
              />
            </FormControl>
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('REGISTER.PHONE')}
                onChangeText={onChangePhoneNumber}
                variant={'underlined'}
                keyboardType={'numeric'}
              />
              <FormControl.HelperText
                color={'blue.400'}
                fontFamily={'Roboto-Regular'}
              >
                {t('REGISTER.PHONE_NOTE')}
              </FormControl.HelperText>
            </FormControl>
            <FormControl maxW="300px">
              <Input
                textAlign={i18n.language === 'he' ? 'right' : 'left'}
                size={'xl'}
                placeholder={t('REGISTER.FACEBOOK_LINK')}
                onChangeText={onChangeFacebookLink}
                variant={'underlined'}
              />
              <FormControl.HelperText fontFamily={'Roboto-Regular'}>
                {t('REGISTER.FACEBOOK_LINK_NOTE')}
              </FormControl.HelperText>
            </FormControl>
            <Button
              backgroundColor={colors.blue['500']}
              onPress={onFBPress}
              leftIcon={<Icon as={Entypo} name="facebook" size="lg" />}
            >
              <Text color={'white'} fontSize={'md'}>
                {isFacebookLoading ? (
                  <Spinner color={'white'} />
                ) : (
                  t('REGISTER.FACEBOOK_LOGIN')
                )}
              </Text>
            </Button>
            <Button
              variant={'link'}
              colorScheme={'secondary'}
              onPress={onHaveAccountPressed}
            >
              {t('REGISTER.ALREADY_HAVE_ACCOUNT')}
            </Button>
          </Stack>
        </View>
        <Button
          backgroundColor={'blue.400'}
          borderRadius={50}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? <Spinner color="white" /> : t('REGISTER.SUBMIT')}
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
