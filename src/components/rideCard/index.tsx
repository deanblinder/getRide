import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import { Avatar, Button, Icon, Text, useTheme, View } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import { IS_IOS } from '../../screens/offerOrEditRides/usePresenter';

const RideCard = (props: Props) => {
  const { ride, disabled } = props;

  const {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    shouldCardBeDisabled,
    isMyRide,
    rideUser,
    rideDate,
    rideHour,
    onEditPress,
  } = usePresenter(props);
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={isMyRide ? onEditPress : pushRidePage}
      disabled={shouldCardBeDisabled}
    >
      <Card
        containerStyle={
          IS_IOS
            ? [styles.shadowContainerIOS, { shadowColor: colors.blue['600'] }]
            : styles.shadowContainerAndroid
        }
      >
        <View
          style={{
            alignContent: 'flex-end',
          }}
        >
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <View style={{ marginRight: '10%' }}>
              <Avatar
                source={{
                  uri: rideUser?.profileImage,
                }}
              >
                {!rideUser?.profileImage &&
                  rideUser?.email.slice(0, 2).toUpperCase()}
              </Avatar>
            </View>
            <View>
              <Text fontSize={'sm'} fontFamily={'Roboto-Regular'}>
                {ride.seats} seats available
              </Text>
            </View>
          </View>
        </View>

        <View
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={'5%'}
          flex={1}
        >
          <Text fontFamily={'Roboto-Regular'} fontSize={'md'}>
            {rideDate} | {rideHour}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Text
            fontFamily={'Roboto-Regular'}
            fontSize={'md'}
            style={{ width: '40%' }}
          >
            {ride.destination.formatted_address}
          </Text>
          <View>
            <Entypo name="arrow-long-left" size={20} />
          </View>
          <Text
            fontFamily={'Roboto-Regular'}
            fontSize={'md'}
            style={{ width: '40%' }}
          >
            {ride.origin.formatted_address}
          </Text>
        </View>
        {disabled && !isMyRide && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '10%',
            }}
          >
            <Button
              backgroundColor={colors.green['400']}
              borderRadius={500}
              style={{ width: '45%' }}
              onPress={onChatPress}
              rightIcon={<Icon as={FontAwesome} name="whatsapp" size="sm" />}
            >
              Chat
            </Button>
            <Button
              borderRadius={500}
              backgroundColor={colors.blue['400']}
              style={{ width: '45%' }}
              onPress={onViewProfilePress}
              rightIcon={<Icon as={AntDesign} name="user" size="sm" />}
            >
              See Profile
            </Button>
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadowContainerAndroid: {
    backgroundColor: 'white', // Set the background color as needed
    elevation: 5, // Set the elevation to control the shadow intensity
    padding: 16, // Add padding to the container if needed
    borderRadius: 8, // Add borderRadius to round the corners (optional)
  },
  shadowContainerIOS: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 7,
  },
});

export default RideCard;
