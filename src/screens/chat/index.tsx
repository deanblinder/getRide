import React from 'react';
import { ScrollView, View } from 'react-native';
import ChatCard from '../../components/chatCard';
import { Input, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';

const Chat = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: '5%' }}>
      <Text fontSize={typography.fontSizes['2xl']}>Chats</Text>
      <View style={{ marginVertical: '2%' }}>
        <Input size={'xl'} variant="rounded" placeholder="Search" />
      </View>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </ScrollView>
  );
};
export default Chat;
