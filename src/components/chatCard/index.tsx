import React from 'react';
import { Avatar, View, Text, Divider } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import typography from 'native-base/src/theme/base/typography';
import usePresenter from './usePresenter';

export type Props = {
  conversationId: string;
};

const ChatCard = (props: Props) => {
  const { onItemPress, senderDetails } = usePresenter(props);

  // if (!senderDetails) return null;

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-evenly',
          marginVertical: '5%',
        }}
      >
        <View style={{ justifyContent: 'center', display: 'flex' }}>
          <Avatar
            source={{
              uri: 'senderDetails.profileImage',
            }}
            style={{ marginRight: '5%' }}
          />
        </View>
        <View style={{ display: 'flex' }}>
          <Text
            style={{ display: 'flex' }}
            fontSize={typography.fontSizes['xl']}
          >
            {'senderDetails.firstName'} {'senderDetails.lastName'}
          </Text>
        </View>
        {/*<View style={{ display: 'flex', justifyContent: 'center' }}>*/}
        {/*  <Text>12:00</Text>*/}
        {/*</View>*/}
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default ChatCard;
