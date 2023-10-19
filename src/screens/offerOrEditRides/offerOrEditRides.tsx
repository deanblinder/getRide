import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/base';
import GoogleMap from '../../components/googleMap';
import {
  Input,
  Stack,
  Button,
  Slider,
  ScrollView,
  Text,
  Spinner,
  View,
} from 'native-base';
import usePresenter, { IS_IOS, Props } from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
    numberOfRoutes,
    onSwitchPress,
    onPlusPress,
    onMinusPress,
  } = usePresenter(props);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <GoogleMap
        rideData={{ destination, origin }}
        routeNumber={routeNumber}
        numbersOfRoutes={getNumberOfRoutes}
      />
      {numberOfRoutes > 1 && (
        <Button size={'sm'} onPress={onChangeRoot}>
          change route
        </Button>
      )}
      <Card containerStyle={styles.card}>
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <View flexDirection={'row'} backgroundColor={'red'}>
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
                  onPressIn={onOriginPressed}
                  editable={false}
                  selectTextOnFocus={false}
                  value={origin?.formatted_address}
                  placeholder="Enter Origin"
                  w="100%"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDestinationPressed}>
                <Input
                  onPressIn={onDestinationPressed}
                  editable={false}
                  selectTextOnFocus={false}
                  value={destination?.formatted_address}
                  placeholder="Enter Destination"
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
                  onPressIn={() => {
                    setShowDatePicker(true);
                  }}
                  placeholder={date.toLocaleDateString('he')}
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
                  onPressIn={() => setShowTimePicker(true)}
                  placeholder={time.toLocaleTimeString('en-US', {
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
        </Stack>
        <View
          marginY={'5%'}
          flexDirection={'row'}
          justifyContent={'space-around'}
        >
          <AntDesign
            name="minuscircleo"
            size={24}
            color="black"
            onPress={onMinusPress}
          />
          <Text>{seats} seats available</Text>
          <AntDesign
            name="pluscircleo"
            size={24}
            color="black"
            onPress={onPlusPress}
          />
        </View>
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
        onPress={addRide}
        marginTop={'10%'}
        marginBottom={'2%'}
        marginLeft={'10%'}
        marginRight={'10%'}
        size={'sm'}
      >
        {loading ? (
          <Spinner color="emerald.500" />
        ) : isEditMode ? (
          'Update'
        ) : (
          'Add Offer'
        )}
      </Button>
      {isEditMode && (
        <Button
          marginX={'10%'}
          marginBottom={'5%'}
          onPress={onDeletePress}
          colorScheme="danger"
          size={'sm'}
        >
          {'Delete'}
        </Button>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: { margin: '10%', borderRadius: 10 },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default OfferOrEditRides;
