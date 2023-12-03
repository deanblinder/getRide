import { useEffect, useId, useState } from 'react';
import { chatActions } from '../../actions';
import { Conversation, Message } from '../../typing';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import * as chance from 'chance';

export type Props = {
  route: {
    params: {
      conversationId: string;
      senderId: string;
    };
  };
};

const usePresenter = (props: Props) => {
  const { conversationId, senderId } = props.route.params;
  const user = useSelector((state: AuthState) => state.user);

  const [conversation, setConversation] = useState<Conversation | undefined>(
    undefined
  );
  const [senderImage, setSenderImage] = useState<string | undefined>();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    getConversation();
  }, []);

  const getConversation = async () => {
    // const conv = await chatActions.getConversation(conversationId);
    // console.log('### conv', conv);
    // conv
    //   ? setConversation(conv)
    //   : setConversation();
  };

  const onSendPress = async () => {
    await chatActions.sendMessage({
      conversationId,
      senderId,
      message,
      userId: user?.uid!,
    });
  };

  const onMassageChange = (text: string) => {
    setMessage(text);
  };

  return { onSendPress, user, conversation, onMassageChange };
};
export default usePresenter;
