import React from 'react';
import { Avatar, View, Text, Divider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import typography from 'native-base/src/theme/base/typography';

const ChatCard = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: '2%',
        }}
      >
        <View style={{ justifyContent: 'center', display: 'flex' }}>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            style={{ marginRight: '5%' }}
          />
        </View>
        <View style={{ display: 'flex' }}>
          <Text
            style={{ display: 'flex' }}
            fontSize={typography.fontSizes['xl']}
          >
            Adi Levi
          </Text>
          <Text style={{ display: 'flex', width: '90%' }}>
            talk to me when you are available
          </Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Text>12:00</Text>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default ChatCard;
