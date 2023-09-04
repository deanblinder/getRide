import React from 'react';
import { View, Text, Input, Button } from 'native-base';
import usePresenter, { Props } from './usePresenter';

const Conversation = (props: Props) => {
  const {} = usePresenter(props);
  return (
    <View>
      <Text>asdsad</Text>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Input style={{ flexGrow: 1 }} />
        <Button>Send</Button>
      </View>
    </View>
  );
};
export default Conversation;
