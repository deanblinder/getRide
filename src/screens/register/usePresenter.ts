import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { addUser } from '../../actions/users';
import { useToast } from 'native-base';

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
    // if (email && password && phoneNumber && isFacebookLink(facebookLink)) {
    if (email && password && phoneNumber) {
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
      if (!email || !password || !phoneNumber) {
        toast.show({
          title: 'Please Fill all details',
        });
      }
      // else if(!isFacebookLink(facebookLink)){
      //   toast.show({
      //     title: 'Please fill a real facebook link',
      //   });
      // }
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

  return {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
  };
};
export default usePresenter;
