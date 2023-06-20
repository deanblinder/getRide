import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, Input, Text } from '@rneui/base';
import usePresenter from './usePresenter';
import GoogleMap from '../../components/googleMap';

const SearchRides = () => {
  const {onDestinationPressed,onOriginPressed} = usePresenter();
  return (
      <View style={styles.container}>
        <View>
        <Input
          // color={'white'}
          // radius={10}
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder='Origin'
          style={{ marginBottom: '5%' }}
          onPressIn={onOriginPressed}
          // titleStyle={{ color: 'grey' }}
        />
        <Input
          // color={'white'}
          // radius={10}
          showSoftInputOnFocus={false}
          textAlign={'left'}
          placeholder='Destination'
          style={{ marginBottom: '5%' }}
          onPressIn={onDestinationPressed}
          // titleStyle={{ color: 'grey' }}
        />
      </View>
      <GoogleMap/>
        <Button radius={20}>Next</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // height: 50,
    // backgroundColor: '#eee',
    marginVertical: 5,
  },
  container: {
    padding: '5%',
    flex: 1,
    // display: 'flex',
  },
});

export default SearchRides;
