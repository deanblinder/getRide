import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useState } from 'react';
import { usersActions } from '../../actions';

const usePresenter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      try {
        // setPersistence(auth, browserSessionPersistence);
        setLoading(true);
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email.toLowerCase(),
          password
        );
        const uid = userCredentials.user.uid;
        const user = await usersActions.getUserById(uid);
        dispatch(setUser(user));
      } catch (error: any) {
        if (error.code === 'auth/user-not-found') {
          alert('User not found');
        } else if (error.code === 'auth/wrong-password') {
          alert('Wrong password');
        } else if (error.code === 'auth/invalid-email') {
          alert('Invalid email');
        } else {
          alert(error);
        }
        console.log('handleLogin error', error);
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

  return {
    handleLogin,
    onChangeEmail,
    onChangePassword,
    loading,
  };
};
export default usePresenter;
