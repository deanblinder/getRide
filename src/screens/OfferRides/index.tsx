import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import GoogleMap from '../../components/googleMap';
import { Input, Stack, Button, Slider, Text } from 'native-base';
import usePresenter from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const OfferRides = () => {
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
    price,
    onPriceChange,
    onSeatsChange,
  } = usePresenter();

  return (
    <View style={styles.container}>
      <GoogleMap origin={origin} destination={destination} />
      <Card containerStyle={{ margin: '10%' }}>
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <Input
            value={origin?.formatted_address}
            onPressIn={onOriginPressed}
            placeholder="Enter Origin"
            w="100%"
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            value={destination?.formatted_address}
            onPressIn={onDestinationPressed}
            placeholder="Enter Destination"
            w="100%"
            editable={false}
            selectTextOnFocus={false}
          />
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
          <Text>price: {price} ₪</Text>
          <Slider
            maxW="300"
            defaultValue={0}
            minValue={0}
            maxValue={100}
            accessibilityLabel="hello world"
            step={1}
            onChange={onPriceChange}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Stack>
        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <RNDateTimePicker
            value={date}
            onChange={onDateChange}
            display="default"
          />
          <RNDateTimePicker
            value={time}
            onChange={onTimeChange}
            mode="time"
            display="default"
          />
        </View>
      </Card>
      <Button onPress={addRide} style={{ padding: '5%', margin: '10%' }}>
        Add Offer
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default OfferRides;
