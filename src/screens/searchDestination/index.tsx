import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import usePresenter from './usePresenter';
import { Button } from 'native-base';
import { Props } from '../searchOrigin/usePresenter';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/backButton';

const SearchRidesDestination = (props: Props) => {
  const { onDonePressed, onLocationSelected, inputRef } = usePresenter(props);

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton dismiss />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={inputRef}
        placeholder="Destination"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onLocationSelected(details);
        }}
        styles={{
          textInput: styles.textInput,
          height: 50,
          backgroundColor: 'white',
          marginTop: 20,
        }}
        query={{
          key: API_KEY,
          language: 'iw',
          components: 'country:il',
        }}
        textInputProps={{
          placeholderTextColor: 'grey',
        }}
      />
      <Button onPress={onDonePressed}>Done</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    marginVertical: 5,
  },
  container: {
    height: '100%',
    padding: '5%',
    flex: 1,
  },
});

export default SearchRidesDestination;
