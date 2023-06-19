import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchRides = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            height: 50,
            backgroundColor: 'white',
            marginTop: 20,
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  container: {
    padding: 10,
    height: '100%',
  },
});

export default SearchRides;
