import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, Input, Text } from '@rneui/base';
import usePresenter from './usePresenter';
import GoogleMap from '../../components/googleMap';

const SearchRides = () => {
  const { onDestinationPressed, onOriginPressed } = usePresenter();
  return (
    <View style={styles.container}>
      <View>
        <Input
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder="Origin"
          style={{ marginBottom: '5%' }}
          onPressIn={onOriginPressed}
        />
        <Input
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder="Destination"
          style={{ marginBottom: '5%' }}
          onPressIn={onDestinationPressed}
        />
      </View>
      <GoogleMap />
      <Button style={{ marginTop: '5%' }} radius={20}>
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
    padding: '5%',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SearchRides;
