import { useState } from 'react';
import { usersActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { setUser } from '../../redux/auth/authActions';
import { useNavigation } from '@react-navigation/native';
import { Gender } from '../../typing';

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
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState<string>(user?.firstName || '');
  const [lastName, setLastName] = useState<string>(user?.lastName || '');
  const [facebookLink, setFacebookLink] = useState<string>(
    user?.facebookLink || ''
  );
  const [instagramLink, setInstagramLink] = useState<string>(
    user?.instagramLink || ''
  );
  const [age, setAge] = useState<number | undefined>(
    user?.birthDate || undefined
  );
  const [gender, setGender] = useState<Gender | undefined>(
    user?.gender || undefined
  );

  const updateUser = async () => {
    const updatedUser = await usersActions.updateUser(user?.uid!, {
      firstName: firstName || '',
      lastName: lastName || '',
      facebookLink: facebookLink || '',
      instagramLink: instagramLink || '',
      birthDate: Date.now(),
      gender: gender,
    });
    dispatch(setUser(updatedUser));
    navigation.goBack();
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

  const onInstagramLinkChange = (text: string) => {
    setInstagramLink(text);
  };

  const onAgeChange = (number: number) => {
    setAge(number);
  };

  const onGenderChange = (text: Gender) => {
    setGender(text);
  };

  return {
    user,
    onFacebookLinkChange,
    onFirstNameChange,
    onLastNameChange,
    updateUser,
    firstName,
    lastName,
    facebookLink,
    instagramLink,
    age,
    gender,
    onInstagramLinkChange,
    onAgeChange,
    onGenderChange,
  };
};
export default usePresenter;
