import { useState } from 'react';
import { usersActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { setUser } from '../../redux/auth/authActions';

export type Props = {
  route: {
    params: {
      userId: string;
    };
  };
};
const usePresenter = (props: Props) => {
  const user = useSelector((state: AuthState) => state.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState<string>(user?.firstName || '');
  const [lastName, setLastName] = useState<string>(user?.lastName || '');
  const [facebookLink, setFacebookLink] = useState<string>(
    user?.facebookLink || ''
  );

  const updateUser = async () => {
    const updatedUser = await usersActions.updateUser(user?.uid!, {
      firstName,
      lastName,
      facebookLink,
    });
    dispatch(setUser(updatedUser));
  };

  const onFacebookLinkChange = (text: string) => {
    setFacebookLink(text);
  };

  const onFirstNameChange = (text: string) => {
    setFirstName(text);
  };

  const onLastNameChange = (text: string) => {
    setLastName(text);
  };

  return {
    user,
    onFacebookLinkChange,
    onFirstNameChange,
    onLastNameChange,
    updateUser,
  };
};
export default usePresenter;
