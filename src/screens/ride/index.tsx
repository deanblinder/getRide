import { View, Text, Image, ScrollView } from 'native-base';
import React from 'react';
import { Card } from '@rneui/base';
import { Props } from './usePresenter';
import RideCard from '../../components/rideCard';
import GoogleMap from '../../components/googleMap';

const RideScreen = (props: Props) => {
  const { ride } = props.route.params;
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <RideCard ride={ride} disabled />
      <View style={{ flex: 1, margin: '5%' }}>
        <GoogleMap
          destination={{
            formatted_address: ride.destination.formatted_address,
            location: ride.destination.location,
          }}
          origin={{
            formatted_address: ride.origin.formatted_address,
            location: ride.origin.location,
          }}
          routeNumber={ride.routeNumber}
        />
      </View>
    </ScrollView>
  );
};

export default RideScreen;
