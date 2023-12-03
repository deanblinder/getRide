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
import {
  AccessToken,
  LoginManager,
  LoginButton,
} from 'react-native-fbsdk-next';
import axios from 'axios';
import { usersActions } from '../../actions';
import * as chance from 'chance';
import { User } from '../../typing';

const usePresenter = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [facebookLink, setFacebookLink] = useState('');

  // function isFacebookLink(url) {
  //   const facebookUrlPattern = /^https:\/\/www\.facebook\.com\/[A-Za-z0-9_.]+$/;
  //   return facebookUrlPattern.test(url);
  // }

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
          alert('Email already in use');
        } else if (error.code === 'auth/invalid-email') {
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          } else {
            alert(error);
          }
        }
        console.log('handle register error', error);
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !password) {
        toast.show({
          title: 'Please Fill all details',
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

  const fetchUserProfile = async (
    accessToken: any
  ): Promise<
    | undefined
    | {
        firstName: string;
        lastName: string;
        email: string;
        profileImage: string;
        facebookId: string;
        facebookLink: string;
      }
  > => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email,picture,first_name,last_name,link&access_token=${accessToken}`
      );
      const data = await response.json();
      console.log('### User Profile Data:', data);
      return {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        profileImage: data.picture.data.url,
        facebookId: data.id,
        facebookLink: data.link,
      };
      // Save or use the user profile data as needed in your app
    } catch (error) {
      console.log('Error fetching user profile data:', error);
      return undefined;
    }
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
    const userProfile = await fetchUserProfile(data.accessToken);
    if (!userProfile) {
      return;
    }
    const auth = getAuth(app);
    const credential = FacebookAuthProvider.credential(data.accessToken);
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
  };

  return {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
    onFBPress,
  };
};
export default usePresenter;
