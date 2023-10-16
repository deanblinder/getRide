import { Ride, User } from '../../typing';
import { useEffect, useState } from 'react';
import { usersActions } from '../../actions';
import { Linking } from 'react-native';

export type Props = {
  route: {
    params: {
      userId: string;
    };
  };
};

const usePresenter = (props: Props) => {
  const { userId } = props.route.params;

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await usersActions.getUserById(userId);
    setUser(user);
  };


  const onFacebookPress = () => {
    Linking.openURL(user?.facebookLink!);
  };

  return { user, onFacebookPress };
};
export default usePresenter;
