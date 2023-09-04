import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
        setLoading(true);
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = userCredentials.user.uid;
        const user = await usersActions.getUserById(uid);
        dispatch(setUser(user));
      } catch (err) {
        console.log('handleLogin error', err);
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
