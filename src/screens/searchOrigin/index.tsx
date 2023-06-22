import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, Text } from '@rneui/base';
import usePresenter, { Props } from './usePresenter';

const SearchRidesOrigin = (props: Props) => {
  const { onDonePressed, onLocationSelected } = usePresenter(props);
  return (
    <View style={styles.container}>
      <Text>Origin</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          onLocationSelected(details);
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
      <Button radius={20} onPress={onDonePressed}>
        Done
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    // backgroundColor: '#eee',
    marginVertical: 5,
  },
  container: {
    height: '50%',
    padding: '5%',
    flex: 1,
    // display: 'flex',
  },
});

export default SearchRidesOrigin;
