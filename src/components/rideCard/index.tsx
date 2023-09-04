import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/base';
import { Avatar, Button, Center } from 'native-base';
import usePresenter, { Props } from './usePresenter';

const RideCard = (props: Props) => {
  const { ride, disabled } = props;

  const {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    shouldCardBeDisabled,
    isMyRide,
  } = usePresenter(props);

  const hour = new Date(parseInt(ride.hour)).getHours().toString();
  const min = new Date(parseInt(ride.hour)).getMinutes().toString();
  const time = hour + ':' + min;

  return (
    <TouchableOpacity onPress={pushRidePage} disabled={shouldCardBeDisabled}>
      <Card>
        <View
          style={{
            alignContent: 'flex-end',
          }}
        >
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <Text>{ride.seats} seats available</Text>
            <Text>{isMyRide ? 'Edit' : undefined}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: '5%',
          }}
        >
          <View style={{ marginRight: '10%' }}>
            <Avatar source={{ uri: ride.userImage }} />
          </View>
          <Center>
            <Text>{ride.date + ' | ' + time}</Text>
          </Center>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 3,
          }}
        >
          <Text style={{ flex: 1 }}>{ride.origin.formatted_address}</Text>
          <Text style={{ flex: 1 }}>-----------{'>'}</Text>
          <Text style={{ flex: 1 }}>{ride.destination.formatted_address}</Text>
        </View>
        {disabled && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '10%',
            }}
          >
            <Button style={{ width: '45%' }} onPress={onChatPress}>
              Chat
            </Button>
            <Button style={{ width: '45%' }} onPress={onViewProfilePress}>
              See Profile
            </Button>
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
};
export default RideCard;
