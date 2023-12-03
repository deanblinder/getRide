import { Props } from './index';
import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';
import { useEffect, useState } from 'react';
import { User } from '../../typing';
import { chatActions, usersActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
// import {chatActions} from "../../actions";

const usePresenter = (props: Props) => {
  const navigation = useNavigation();
  const user = useSelector((state: AuthState) => state.user);

  const { conversationId } = props;
  // const [conversationId, setConversationId] = useState<string>('');
  const [senderDetails, setSenderDetails] = useState<User | undefined>(
    undefined
  );

  const onItemPress = (item: any) => {
    // const conversationId = [senderId, item.id].sort().join();
    // @ts-ignore
    navigation.navigate(screenIds.CONVERSATION_SCREEN, {
      conversationId,
    });
  };

  useEffect(() => {
    getSenderDetails();
    // console.log('### senderId', senderId);
    // console.log('### user?.uid', user?.uid);
    // setConversationId([senderId, user?.uid].sort().join(''));
    // console.log('### conversationId', conversationId);
  }, []);

  const getSenderDetails = async () => {
    // setSenderDetails(await usersActions.getUserById(senderId));
  };

  return {
    onItemPress,
    senderDetails,
  };
};
export default usePresenter;
