import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// @ts-ignore
import { Card } from '@rneui/base';
import usePresenter from './usePresenter';
import { Input, Button, Stack, Spinner, Slider, Text } from 'native-base';
import RideCard from '../../components/rideCard';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const SearchRides = () => {
  const {
    onDestinationPressed,
    onOriginPressed,
    origin,
    destination,
    rides,
    onSearchPress,
    loading,
    radius,
    setRideRadius,
    setShowDatePicker,
    shouldShowDatePicker,
    onDateChange,
    clearSearch,
    date,
  } = usePresenter();

  const renderRides = () => {
    if (!rides) {
      return null;
    }

    return rides.map((ride, index) => {
      return <RideCard key={index} ride={ride} />;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Card
        containerStyle={{
          margin: '10%',
          borderRadius: 10,
        }}
      >
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <TouchableOpacity onPress={onOriginPressed}>
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
          {!shouldShowDatePicker && (
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Input
                editable={false}
                selectTextOnFocus={false}
                onPressIn={() => setShowDatePicker(true)}
                // value={destination?.formatted_address}
                placeholder="Enter Date"
                w="100%"
              />
            </TouchableOpacity>
          )}
          <View
            style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '-5%' }}
          >
            {shouldShowDatePicker && (
              <RNDateTimePicker
                value={date}
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>
          <Text style={{ marginVertical: '5%' }}>
            radius from search: {radius} km
          </Text>
          <Slider
            defaultValue={7}
            minValue={0}
            maxValue={15}
            accessibilityLabel="hello world"
            step={1}
            onChange={setRideRadius}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Stack>
        <Button style={{ padding: '5%', margin: '5%' }} onPress={onSearchPress}>
          {loading ? <Spinner color="emerald.500" /> : 'search'}
        </Button>
        {rides.length > 0 && (
          <Button
            style={{
              padding: '5%',
              marginBottom: '5%',
              marginRight: '5%',
              marginLeft: '5%',
            }}
            onPress={clearSearch}
          >
            Clear Results
          </Button>
        )}
      </Card>
      {renderRides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
});

export default SearchRides;
