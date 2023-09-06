import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { addUser } from '../../actions/users';

const usePresenter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSignup = async () => {
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
    }
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
    loading,
  };
};
export default usePresenter;
