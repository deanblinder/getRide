import React from 'react';
import {
  Pressable,
  View,
  Pressable as RNPressable,
  TouchableOpacity,
} from 'react-native';
import { Text, Card } from '@rneui/base';
import { Avatar, Divider, Image } from 'native-base';
import usePresenter, { Props, Ride } from './usePresenter';

const RideCard = (props: Props) => {
  const { ride } = props;

  const { pushRidePage } = usePresenter(props);

  return (
    <TouchableOpacity onPress={pushRidePage}>
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Avatar source={{ uri: ride.image }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{ride.origin.formatted_address}</Text>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text>{ride.date + ' | ' + ride.hour}</Text>
            <Text>-------------------{'>'}</Text>
          </View>
          <Text>{ride.destination.formatted_address}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
export default RideCard;
