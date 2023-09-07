import { Ride, User } from '../../typing';
import { useEffect, useState } from 'react';
import { usersActions } from '../../actions';

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
  return { user };
};
export default usePresenter;
