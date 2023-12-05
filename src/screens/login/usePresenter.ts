import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useState } from 'react';
import { usersActions } from '../../actions';
import { useTranslation } from 'react-i18next';

const usePresenter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      try {
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
          alert(t('ALERT.USER_NOT_FOUND'));
        } else if (error.code === 'auth/wrong-password') {
          alert(t('ALERT.WRONG_PASSWORD'));
        } else if (error.code === 'auth/invalid-email') {
          alert(t('ALERT.INVALID_EMAIL'));
        } else {
          alert(error);
        }
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
