import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@rneui/base';
import GoogleMap from '../../components/googleMap';
import { Input, Stack , Button} from 'native-base';
import usePresenter from './usePresenter';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const OfferRides = () => {
  const {onOriginPressed,onDestinationPressed,origin,destination} = usePresenter();
  return (
    <View style={styles.container}>
      <GoogleMap origin={origin} destination={destination} />
      <Card containerStyle={{ margin: '10%' }}>
        <Stack space={2} w="90%" maxW="300px" mx="auto">
        <Input value={origin?.formatted_address}  onPressIn={onOriginPressed} placeholder="Enter Origin" w="100%" />
        <Input value={destination?.formatted_address} onPressIn={onDestinationPressed} placeholder="Enter Destination" w="100%" />
        </Stack>
        <View style={{flexDirection:"row", marginTop:'5%'}}>
        <RNDateTimePicker value={new Date()} display='default'/>
        <RNDateTimePicker value={new Date()} mode='time'  display='default'/>
        </View>
      </Card>
        
      <Button style={{ padding: '5%',margin:"10%" }}>Add Offer</Button>
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
