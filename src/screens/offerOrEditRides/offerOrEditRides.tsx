import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/base';
import GoogleMap from '../../components/googleMap';
import {
  Input,
  useTheme,
  Stack,
  Button,
  ScrollView,
  Spinner,
  View,
  Icon,
} from 'native-base';
import usePresenter, { IS_IOS, Props } from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ActionSheet from '../../components/actionSheet';
import { useTranslation } from 'react-i18next';

const OfferOrEditRides = (props: Props) => {
  const {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    onDateChange,
    onTimeChange,
    time,
    date,
    addRide,
    seats,
    onSeatsChange,
    shouldShowDatePicker,
    shouldShowTimePicker,
    setShowTimePicker,
    setShowDatePicker,
    loading,
    isEditMode,
    onDeletePress,
    onChangeRoot,
    routeNumber,
    getNumberOfRoutes,
    shouldShowChangeRouteButton,
    onSwitchPress,
  } = usePresenter(props);

  const { colors } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
    >
      <GoogleMap
        rideData={{ destination, origin }}
        routeNumber={routeNumber}
        numbersOfRoutes={getNumberOfRoutes}
      />
      {shouldShowChangeRouteButton && (
        <Button
          borderRadius={0}
          backgroundColor={'blue.400'}
          size={'sm'}
          onPress={onChangeRoot}
          leftIcon={<Icon as={MaterialIcons} name="alt-route" size="sm" />}
        >
          {t('MAP.CHANGE_ROUTE')}
        </Button>
      )}
      <Card
        containerStyle={
          IS_IOS
            ? [styles.shadowContainerIOS, { shadowColor: colors.blue['600'] }]
            : styles.shadowContainerAndroid
        }
      >
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <View flexDirection={'row'}>
            <View justifyContent={'center'}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 20,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: -10,
                }}
                onPress={onSwitchPress}
              >
                <FontAwesome name="long-arrow-up" />
                <FontAwesome name="long-arrow-down" />
              </TouchableOpacity>
            </View>
            <View w="90%" maxW="300px" mx="auto">
              <TouchableOpacity
                onPress={onOriginPressed}
                style={{ marginBottom: '5%' }}
              >
                <Input
                  textAlign={i18n.language === 'he' ? 'right' : 'left'}
                  onPressIn={onOriginPressed}
                  editable={false}
                  selectTextOnFocus={false}
                  value={origin?.formatted_address}
                  placeholder={t('ENTER_DETAILS_CARD.ENTER_ORIGIN')}
                  w="100%"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDestinationPressed}>
                <Input
                  textAlign={i18n.language === 'he' ? 'right' : 'left'}
                  onPressIn={onDestinationPressed}
                  editable={false}
                  selectTextOnFocus={false}
                  value={destination?.formatted_address}
                  placeholder={t('ENTER_DETAILS_CARD.ENTER_DESTINATION')}
                  w="100%"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            display={'flex'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            marginX={'5%'}
          >
            {!IS_IOS && (
              <TouchableOpacity
                style={{ width: '40%' }}
                onPress={() => {
                  setShowDatePicker(true);
                }}
              >
                <Input
                  fontSize={15}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10%',
                  }}
                  placeholderTextColor={'black'}
                  onPressIn={() => {
                    setShowDatePicker(true);
                  }}
                  placeholder={date.toLocaleDateString(i18n.language)}
                  w="100%"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </TouchableOpacity>
            )}
            {!IS_IOS && (
              <TouchableOpacity
                style={{ width: '40%' }}
                onPress={() => setShowTimePicker(true)}
              >
                <Input
                  fontSize={15}
                  placeholderTextColor={'black'}
                  onPressIn={() => setShowTimePicker(true)}
                  placeholder={time.toLocaleTimeString(i18n.language, {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                  w="100%"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </TouchableOpacity>
            )}
          </View>
          <View marginX={'5%'}>
            <ActionSheet
              items={[1, 2, 3, 4, 5, 6]}
              placeholder={t('ENTER_DETAILS_CARD.SEATS_AVAILABLE')}
              title={t('ACTION_SHEET.AVAILABLE_SEATS_TITLE')}
              onItemPressed={onSeatsChange}
              initialSelectedValue={seats}
            />
          </View>
        </Stack>
        <View flexDirection={'row'} marginTop={'5%'} marginX={'5%'}>
          {shouldShowDatePicker && (
            <RNDateTimePicker
              value={date}
              onChange={onDateChange}
              display="default"
            />
          )}
          {shouldShowTimePicker && (
            <RNDateTimePicker
              value={time}
              onChange={onTimeChange}
              mode="time"
              display="default"
            />
          )}
        </View>
      </Card>
      <Button
        backgroundColor={'blue.400'}
        borderRadius={50}
        onPress={addRide}
        marginTop={'10%'}
        marginBottom={'2%'}
        marginX={'5%'}
        size={'sm'}
      >
        {loading ? (
          <Spinner color="white" />
        ) : isEditMode ? (
          t('ADD_RIDES.UPDATE_OFFER_BUTTON')
        ) : (
          t('ADD_RIDES.ADD_OFFER_BUTTON')
        )}
      </Button>
      {isEditMode && (
        <Button
          backgroundColor={'red.400'}
          borderRadius={50}
          marginX={'5%'}
          marginBottom={'5%'}
          onPress={onDeletePress}
          colorScheme="danger"
          size={'sm'}
        >
          {t('ADD_RIDES.DELETE_OFFER_BUTTON')}
        </Button>
      )}
    </ScrollView>
  );
};

export default OfferOrEditRides;

const styles = StyleSheet.create({
  shadowContainerAndroid: {
    backgroundColor: 'white', // Set the background color as needed
    elevation: 5, // Set the elevation to control the shadow intensity
    padding: 16, // Add padding to the container if needed
    borderRadius: 8, // Add borderRadius to round the corners (optional)
  },
  shadowContainerIOS: {
    marginTop: '10%',
    borderRadius: 0,
    padding: '5%',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});
