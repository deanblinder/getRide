import React from 'react';
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import usePresenter, { Props } from './usePresenter';
import { View, Button, useTheme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/backButton';
import { isIOS } from '@rneui/base';

const SearchRidesOrigin = (props: Props) => {
  const { onDonePressed, onLocationSelected, inputRef } = usePresenter(props);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton dismiss />,
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            ref={inputRef}
            placeholder="Origin"
            fetchDetails={true}
            onPress={(data, details = null) => {
              onLocationSelected(details);
              // 'details' is provided when fetchDetails = true
              // console.log(data, details);
            }}
            styles={{
              textInput: styles.textInput,
              height: 50,
              backgroundColor: 'white',
              marginTop: 20,
            }}
            textInputProps={{
              placeholderTextColor: 'grey',
              borderStyle: !isIOS && 'solid',
              borderWidth: !isIOS && 1,
              borderColor: !isIOS && 'grey',
            }}
            query={{
              key: API_KEY,
              language: 'iw',
              components: 'country:il',
            }}
          />
          <Button
            backgroundColor={'blue.400'}
            borderRadius={50}
            onPress={onDonePressed}
          >
            Done
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
// const { colors } = useTheme();

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  container: {
    height: '100%',
    padding: '5%',
    backgroundColor: 'white',
  },
});

export default SearchRidesOrigin;
