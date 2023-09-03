import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// @ts-ignore
import { Card } from '@rneui/base';
import usePresenter from './usePresenter';
import GoogleMap from '../../components/googleMap';
import { Input, Button, Stack, Icon } from 'native-base';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import RideCard from '../../components/rideCard';

const SearchRides = () => {
  const {
    onDestinationPressed,
    onOriginPressed,
    origin,
    destination,
    rides,
    onSearchPress,
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
      <Card containerStyle={{ margin: '10%' }}>
        <Stack space={2} w="90%" maxW="300px" mx="auto">
          <Input
            editable={false}
            selectTextOnFocus={false}
            value={origin?.formatted_address}
            onPressIn={onOriginPressed}
            placeholder="Enter Origin"
            w="100%"
          />
          <Input
            editable={false}
            selectTextOnFocus={false}
            value={destination?.formatted_address}
            onPressIn={onDestinationPressed}
            placeholder="Enter Destination"
            w="100%"
          />
        </Stack>
        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <RNDateTimePicker value={new Date()} display="default" />
          <RNDateTimePicker value={new Date()} mode="time" display="default" />
        </View>
        <Button style={{ padding: '5%', margin: '5%' }} onPress={onSearchPress}>
          Search
        </Button>
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
    // justifyContent: 'space-between',
  },
});

export default SearchRides;
