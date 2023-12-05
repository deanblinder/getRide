import React from 'react';
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
// @ts-ignore
import { API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import usePresenter from './usePresenter';
import { Button, View } from 'native-base';
import { Props } from '../searchOrigin/usePresenter';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/backButton';
import { isIOS } from '@rneui/base';
import { useTranslation } from 'react-i18next';

const SearchRidesDestination = (props: Props) => {
  const { onDonePressed, onLocationSelected, inputRef } = usePresenter(props);
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

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
            placeholder={t('SEARCH_LOCATION_PAGE.DESTINATION')}
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
              textAlign: i18n.language === 'he' ? 'right' : 'left',
              placeholderTextColor: 'grey',
              borderStyle: !isIOS && 'solid',
              borderWidth: !isIOS && 1,
              borderColor: !isIOS && 'grey',
            }}
          />
          <Button
            backgroundColor={'blue.400'}
            borderRadius={50}
            onPress={onDonePressed}
          >
            {t('SEARCH_LOCATION_PAGE.DONE_BUTTON')}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

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

export default SearchRidesDestination;
