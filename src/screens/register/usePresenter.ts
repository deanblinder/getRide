import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithCredential,
} from 'firebase/auth';
import { app, auth } from '../../config/firebase';
import { addUser } from '../../actions/users';
import { useToast } from 'native-base';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { facebookActions, usersActions } from '../../actions';
import { User } from '../../typing';
import { screenIds } from '../../constants';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const usePresenter = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [facebookLink, setFacebookLink] = useState('');
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const handleSignup = async () => {
    if (email && password) {
      try {
        setLoading(true);
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = {
          email: email.toLowerCase(),
          password,
          phoneNumber,
          uid: userCredentials.user.uid,
          facebookLink,
        };
        await addUser(user);
        setLoading(false);
        dispatch(setUser(user));
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          alert(t('ALERT.EMAIL_ALREADY_IN_USE'));
        } else if (error.code === 'auth/invalid-email') {
          if (error.code === 'auth/invalid-email') {
            alert(t('ALERT.EMAIL_NOT_VALID'));
          } else {
            alert(error);
          }
        }
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !password) {
        toast.show({
          title: t('TOAST.PLEASE_PROVIDE_ALL_FIELDS'),
        });
      }
    }
  };

  const onChangeFacebookLink = (text: string) => {
    setFacebookLink(text);
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onChangePhoneNumber = (text: string) => {
    setPhoneNumber(text);
  };

  const onFBPress = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_link',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const userProfile = await facebookActions.fetchUserProfile(
      data.accessToken
    );
    if (!userProfile) {
      return;
    }
    const auth = getAuth(app);
    const credential = FacebookAuthProvider.credential(data.accessToken);
    setIsFacebookLoading(true);
    const firebaseUser = await signInWithCredential(auth, credential);

    const user: User = {
      uid: firebaseUser.user.uid,
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      email: userProfile?.email!,
      profileImage: userProfile?.profileImage,
      facebookLink: userProfile?.facebookLink,
      facebookId: userProfile?.facebookId,
    };

    const userFromDb = await usersActions.getUserById(user.uid);
    if (userFromDb) {
      dispatch(setUser(userFromDb));
    } else {
      await usersActions.addUser(user);
      dispatch(setUser(user));
    }
    setIsFacebookLoading(false);
  };

  const onHaveAccountPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.LOGIN_SCREEN, {});
  };

  return {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
    onFBPress,
    onHaveAccountPressed,
    isFacebookLoading,
  };
};
export default usePresenter;
