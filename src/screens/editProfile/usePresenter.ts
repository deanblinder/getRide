import { useState } from 'react';
import { usersActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { setUser } from '../../redux/auth/authActions';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../typing';

export type Props = {
  route: {
    params: {
      user: User;
    };
  };
};
const usePresenter = (props: Props) => {
  const { user } = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const updateUser = async () => {
    try {
      setIsLoading(true);
      const updatedUser1 = await usersActions.updateUser(
        user?.uid!,
        updatedUser
      );
      dispatch(setUser(updatedUser1));
      setIsLoading(false);

      navigation.goBack();
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFacebookLinkChange = (text: string) => {
    setUpdatedUser({
      ...updatedUser,
      facebookLink: text,
    });
  };

  const onFirstNameChange = (text: string) => {
    setUpdatedUser({
      ...updatedUser,
      firstName: text,
    });
  };

  const onLastNameChange = (text: string) => {
    setUpdatedUser({
      ...updatedUser,
      lastName: text,
    });
  };

  const onInstagramLinkChange = (text: string) => {
    setUpdatedUser({
      ...updatedUser,
      instagramLink: text,
    });
  };

  const onPhoneChange = (text: string) => {
    setUpdatedUser({
      ...updatedUser,
      phoneNumber: text,
    });
  };

  return {
    user,
    onFacebookLinkChange,
    onFirstNameChange,
    onLastNameChange,
    updateUser,
    updatedUser,
    onInstagramLinkChange,
    onPhoneChange,
    isLoading,
  };
};
export default usePresenter;
