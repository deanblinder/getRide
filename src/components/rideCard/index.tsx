import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/base';
import { Avatar, Button, Center, Text } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { Entypo } from '@expo/vector-icons';

const RideCard = (props: Props) => {
  const { ride, disabled } = props;

  const {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    shouldCardBeDisabled,
    isMyRide,
    rideUser,
    onEditPress,
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
            <Text fontSize={'sm'}>{ride.seats} seats available</Text>
            {isMyRide && (
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Entypo name="edit" size={20} onPress={onEditPress} />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: '5%',
          }}
        >
          <View style={{ marginRight: '10%' }}>
            <Avatar source={{ uri: rideUser?.profileImage }} />
          </View>
          <Center>
            <Text bold>{ride.date + ' | ' + time}</Text>
          </Center>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ flex: 1 }} bold>
            {ride.origin.formatted_address}
          </Text>
          <Text style={{ flex: 1 }} bold>
            -----------{'>'}
          </Text>
          <Text style={{ flex: 1 }} bold>
            {ride.destination.formatted_address}
          </Text>
        </View>
        {disabled && !isMyRide && (
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
