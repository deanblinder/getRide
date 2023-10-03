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
import usePresenter, { Props } from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';

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
  } = usePresenter(props);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <GoogleMap
        origin={origin}
        destination={destination}
        routeNumber={routeNumber}
        numbersOfRoutes={getNumberOfRoutes}
      />
      {numberOfRoutes > 1 && (
        <Button onPress={onChangeRoot}>change route</Button>
      )}
      <Card containerStyle={styles.card}>
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <TouchableOpacity onPress={onOriginPressed}>
            <Input
              onPressIn={onOriginPressed}
              value={origin?.formatted_address}
              placeholder="Enter Origin"
              w="100%"
              editable={false}
              selectTextOnFocus={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDestinationPressed}>
            <Input
              onPressIn={onDestinationPressed}
              value={destination?.formatted_address}
              placeholder="Enter Destination"
              w="100%"
              editable={false}
              selectTextOnFocus={false}
            />
          </TouchableOpacity>
          <View
            display={'flex'}
            justifyContent={'space-between'}
            flexDirection={'row'}
          >
            {!shouldShowDatePicker && (
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
                  placeholder="Enter Date"
                  w="100%"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </TouchableOpacity>
            )}
            {!shouldShowTimePicker && (
              <TouchableOpacity
                style={{ width: '40%' }}
                onPress={() => setShowTimePicker(true)}
              >
                <Input
                  onPressIn={() => setShowTimePicker(true)}
                  placeholder="Enter Time"
                  w="100%"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </TouchableOpacity>
            )}
          </View>
          <Text>seats: {seats}</Text>
          <Slider
            maxW="300"
            defaultValue={4}
            minValue={0}
            maxValue={7}
            accessibilityLabel="hello world"
            step={1}
            onChange={onSeatsChange}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Stack>
        <View flexDirection={'row'} marginTop={'5%'}>
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
