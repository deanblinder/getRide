import React from 'react';
import { ScrollView, View } from 'react-native';
import ChatCard from '../../components/chatCard';
import { Input, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter from './usePresenter';
import { adiId, deanId } from '../../typing';

const Chat = () => {
  const { conversationIds } = usePresenter();

  if (!conversationIds) return null;
  console.log(conversationIds);

  return (
    <ScrollView
      contentContainerStyle={{ padding: '5%' }}
      style={{ backgroundColor: 'white' }}
    >
      <Text
        fontSize={typography.fontSizes['2xl']}
        fontFamily={'Roboto-Regular'}
      >
        Chats
      </Text>
      <View style={{ marginVertical: '2%' }}>
        <Input size={'xl'} variant="rounded" placeholder="Search" />
      </View>
      {conversationIds.map((conversationId) => (
        <ChatCard conversationId={conversationId} />
      ))}
    </ScrollView>
  );
};
export default Chat;
