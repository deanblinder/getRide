import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Input,
  Button,
  Icon,
  useTheme,
  ScrollView,
  Divider,
  Avatar,
} from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Conversation = (props: Props) => {
  const { onSendPress, user, conversation, onMassageChange } =
    usePresenter(props);
  const { colors } = useTheme();

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     (event) => {
  //       setKeyboardHeight(event.endCoordinates.height);
  //     }
  //   );
  //
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setKeyboardHeight(0);
  //     }
  //   );
  //
  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={keyboardHeight}
      style={{ flexGrow: 1 }}
    >
      <ScrollView
        padding={'5%'}
        backgroundColor={'white'}
        flexDirection={'column-reverse'}
        flexGrow={1}
      >
        {conversation &&
          conversation.messages.map((item, index) => {
            const isCurrentUser = item.senderId === user!.uid;
            return (
              <View
                key={index}
                flexDirection={'row'}
                justifyContent={
                  item.senderId === user!.uid ? 'flex-end' : 'flex-start'
                }
                marginBottom={'5%'}
                alignItems={'center'}
              >
                {!isCurrentUser && (
                  <TouchableOpacity onPress={() => console.log('pressed')}>
                    <Avatar
                      source={{ uri: isCurrentUser ? user?.profileImage : '' }}
                      size={'xs'}
                    />
                  </TouchableOpacity>
                )}
                <View
                  backgroundColor={
                    isCurrentUser ? colors.blue['400'] : colors.blue['50']
                  }
                  borderRadius={50}
                  padding={'5%'}
                  maxWidth={'80%'}
                  marginX={'3%'}
                >
                  <Text
                    color={isCurrentUser ? 'white' : 'black'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={'sm'}
                  >
                    {item.content}
                  </Text>
                </View>
                {isCurrentUser && (
                  <TouchableOpacity onPress={() => console.log('pressed')}>
                    <Avatar
                      source={{ uri: isCurrentUser ? user?.profileImage : '' }}
                      size={'xs'}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
      </ScrollView>
      <Divider />
      <View
        padding={'5%'}
        flexDirection={'row'}
        bottom={0}
        backgroundColor={'white'}
      >
        <Input
          flexGrow={'1'}
          placeholder={''}
          borderRadius={50}
          backgroundColor={colors.blue['50']}
          borderColor={colors.blue['400']}
          marginRight={'5%'}
          onChangeText={onMassageChange}
        />
        <Button
          borderRadius={500}
          size={'sm'}
          backgroundColor={colors.blue['400']}
          onPress={onSendPress}
          rightIcon={
            <Icon as={MaterialCommunityIcons} name="send-circle" size="lg" />
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Conversation;
