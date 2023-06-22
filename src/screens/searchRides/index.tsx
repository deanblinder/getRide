import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { Button, Card, Input } from '@rneui/base';
import usePresenter from './usePresenter';
import GoogleMap from '../../components/googleMap';

const SearchRides = () => {
  const { onDestinationPressed, onOriginPressed, origin, destination } =
    usePresenter();
  return (
    <View style={styles.container}>
      <GoogleMap origin={origin} destination={destination} />
      <Card containerStyle={{ margin: '10%' }} wrapperStyle={{ padding: '5%' }}>
        <Input
          leftIcon={{ type: 'font-awesome', name: 'search' }}
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder="Enter Origin"
          style={{ marginBottom: '5%' }}
          onPressIn={onOriginPressed}
          value={origin?.formatted_address}
        />
        <Input
          leftIcon={{ type: 'font-awesome', name: 'search' }}
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder="Enter Destination"
          style={{ marginBottom: '5%' }}
          onPressIn={onDestinationPressed}
          value={destination?.formatted_address}
        />
        <Button>Done</Button>
      </Card>
      <Button style={{ padding: '5%' }} radius={20}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SearchRides;
