import { useEffect, useState } from 'react';
import { chatActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { adiId, conversationId, deanId } from '../../typing';

const usePresenter = () => {
  const user = useSelector((state: AuthState) => state.user);
  const [conversationIds, setConversationIds] = useState<string[]>([
    conversationId,
  ]);

  useEffect(() => {
    getConversation(user?.uid!);
  }, []);

  const getConversation = async (userId: string) => {
    // const conversation = await chatActions.getConversation(userId);
    // console.log('### conversation', conversation);
    // return conversation;
  };

  return { conversationIds };
};

export default usePresenter;
