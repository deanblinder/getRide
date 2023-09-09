import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/base';
import GoogleMap from '../../components/googleMap';
import { Input, Stack, Button, Slider, Text, Spinner } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const EditRides = (props: Props) => {
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
  } = usePresenter(props);

  return (
    <View style={styles.container}>
      <GoogleMap origin={origin} destination={destination} />
      <Card containerStyle={{ margin: '10%' }}>
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
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
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
        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
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
      <Button onPress={addRide} style={{ padding: '5%', margin: '10%' }}>
        {loading ? <Spinner color="emerald.500" /> : 'Edit Offer'}
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
export default EditRides;
