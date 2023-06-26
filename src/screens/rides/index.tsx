import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { View } from 'react-native';
import usePresenter from './usePresenter';
import RideCard from '../../components/rideCard';
import typography, { IFontSize } from 'native-base/src/theme/base/typography';

const Rides = () => {
  const { previousRides } = usePresenter();

  if (previousRides.length === 0)
    return (
      <View style={{ padding: '5%' }}>
        <Text fontSize={typography.fontSizes['2xl']}>No Previous rides</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={{ display: 'flex' }}>
      <Text style={{ padding: '5%' }} fontSize={typography.fontSizes['2xl']}>
        Previous rides
      </Text>
      {previousRides.map((ride) => (
        <RideCard key={ride.id} ride={ride} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Rides;
