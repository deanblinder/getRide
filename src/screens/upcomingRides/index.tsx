import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'native-base';
import usePresenter from './usePresenter';
import RideCard from '../../components/rideCard';
import RideCardSkeleton from '../../components/rideCardSkeleton';

const Rides = () => {
  const { upcomingRides, loading } = usePresenter();

  if (loading) {
    return <RideCardSkeleton />;
  }

  if (upcomingRides.length === 0)
    return (
      <View padding={'5%'}>
        <Text fontSize={'2xl'}>No Upcoming Rides</Text>
      </View>
    );

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ backgroundColor: 'white', display: 'flex' }}
    >
      <Text style={{ padding: '5%' }} fontSize={'2xl'}>
        Upcoming rides
      </Text>
      {upcomingRides.map((ride, index) => (
        <RideCard key={index} ride={ride} />
      ))}
    </ScrollView>
  );
};

export default Rides;
