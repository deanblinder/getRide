import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// @ts-ignore
import { Card } from '@rneui/base';
import usePresenter from './usePresenter';
import {
  Input,
  Button,
  Stack,
  Spinner,
  Slider,
  Text,
  View,
  Center,
} from 'native-base';
import RideCard from '../../components/rideCard';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Ride } from '../../typing';
import { FontAwesome } from '@expo/vector-icons';

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
    onSearchMore,
    onSwitchPress,
  } = usePresenter();

  const renderItem = ({ item }: { item: Ride }) => {
    return <RideCard ride={item} />;
  };

  const renderSearchCard = () => {
    return (
      <Card
        containerStyle={{
          margin: '10%',
          borderRadius: 10,
        }}
      >
        <View flexDirection={'row'} backgroundColor={'red'}>
          <Center>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={onSwitchPress}
            >
              <FontAwesome name="long-arrow-up" />
              <FontAwesome name="long-arrow-down" />
            </TouchableOpacity>
          </Center>
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
        <Stack space={2} w="90%" maxW="300px" mx="auto">
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
    );
  };

  const renderRides = () => {
    return (
      <FlatList
        data={rides}
        renderItem={renderItem}
        ListHeaderComponent={renderSearchCard}
        onEndReached={onSearchMore}
        onEndReachedThreshold={0.3}
      />
    );
  };

  return <View style={styles.container}>{renderRides()}</View>;
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
