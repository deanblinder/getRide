import { useEffect, useState } from 'react';
import { chatActions } from '../../actions';
import { Message } from '../../typing';

export type Props = {
  route: {
    params: {
      conversationId: string;
    };
  };
};

const usePresenter = (props: Props) => {
  const { conversationId } = props.route.params;

  useEffect(() => {
    getConversation();
  }, []);

  const getConversation = async () => {
    const conv = await chatActions.getConversation(conversationId);
  };

  return {};
};
export default usePresenter;
