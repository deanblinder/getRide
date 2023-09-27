import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card } from '@rneui/base';
import { Avatar, Button, Center, Text, View } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const RideCard = (props: Props) => {
  const { ride, disabled } = props;

  const {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    shouldCardBeDisabled,
    isMyRide,
    rideUser,
    rideDate,
    rideHour,
    onEditPress,
  } = usePresenter(props);

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
            <View style={{ marginRight: '10%' }}>
              <Avatar source={{ uri: rideUser?.profileImage }} />
            </View>
            <View>
              {isMyRide && (
                <View
                  style={{ display: 'flex', flexDirection: 'row' }}
                  marginBottom={'30%'}
                >
                  <Entypo name="edit" size={20} onPress={onEditPress} />
                </View>
              )}
              <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <MaterialCommunityIcons name="seat" size={20} />
                <Text fontSize={'sm'} bold>
                  {ride.seats}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={'5%'}
          flex={1}
        >
          <Text bold>{rideHour}</Text>
          <Text bold>{rideDate}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
            flex: 1,
          }}
        >
          <Text bold>{ride.destination.formatted_address}</Text>
          <View>
            <Entypo name="arrow-long-left" size={20} />
          </View>
          <Text bold>{ride.origin.formatted_address}</Text>
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
export default memo(RideCard);
