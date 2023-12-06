import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// @ts-ignore
import { Card } from '@rneui/base';
import usePresenter from './usePresenter';
import {
  Input,
  Button,
  Stack,
  Spinner,
  Text,
  View,
  Divider,
  useTheme,
} from 'native-base';
import RideCard from '../../components/rideCard';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Ride } from '../../typing';
import { FontAwesome } from '@expo/vector-icons';
import RideCardSkeleton from '../../components/rideCardSkeleton';
import { IS_IOS } from '../offerOrEditRides/usePresenter';
import ActionSheet from '../../components/actionSheet';
import { useTranslation } from 'react-i18next';

const SearchRides = () => {
  const {
    onDestinationPressed,
    onOriginPressed,
    origin,
    destination,
    rides,
    onSearchPress,
    loading,
    setShowDatePicker,
    shouldShowDatePicker,
    onDateChange,
    clearSearch,
    date,
    onSearchMore,
    onSwitchPress,
    loadingMore,
    setRadius,
    radius,
  } = usePresenter();
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();

  const renderItem = ({ item }: { item: Ride }) => {
    return <RideCard ride={item} searchData={{ origin, destination }} />;
  };

  const renderSearchCard = () => {
    return (
      <>
        <Card
          containerStyle={
            IS_IOS
              ? [styles.shadowContainerIOS, { shadowColor: colors.blue['600'] }]
              : styles.shadowContainerAndroid
          }
        >
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
                style={{ marginBottom: '5%', flexDirection: 'row' }}
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
          <Stack space={2} w="90%" maxW="300px" mx="auto">
            {!IS_IOS && (
              <TouchableOpacity
                style={{ marginTop: '5%' }}
                onPress={() => setShowDatePicker(true)}
              >
                <Input
                  textAlign={i18n.language === 'he' ? 'right' : 'left'}
                  fontSize={15}
                  editable={false}
                  selectTextOnFocus={false}
                  onPressIn={() => setShowDatePicker(true)}
                  placeholder={date.toLocaleDateString(i18n.language)}
                  placeholderTextColor={'black'}
                  w="100%"
                />
              </TouchableOpacity>
            )}
            <View marginTop={'5%'}>
              <ActionSheet
                items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                placeholder={t('ENTER_DETAILS_CARD.KILOMETER_FROM_POINT')}
                title={t('ACTION_SHEET.DISTANCE_TITLE')}
                initialSelectedValue={radius}
                onItemPressed={(value: number) => {
                  setRadius(value);
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              {shouldShowDatePicker && (
                <RNDateTimePicker
                  value={date}
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>
          </Stack>
          <Button
            style={{
              padding: '5%',
              margin: '5%',
            }}
            borderRadius={50}
            size={'sm'}
            backgroundColor={'blue.400'}
            onPress={onSearchPress}
          >
            {loading ? (
              <Spinner color="white" />
            ) : (
              t('ENTER_DETAILS_CARD.SEARCH_BUTTON')
            )}
          </Button>
          {rides && rides.length > 0 && (
            <Button
              style={{
                padding: '5%',
                marginBottom: '5%',
                marginRight: '5%',
                marginLeft: '5%',
              }}
              backgroundColor={'blue.400'}
              borderRadius={50}
              size={'sm'}
              onPress={clearSearch}
            >
              {t('ENTER_DETAILS_CARD.CLEAR_RESULTS_BUTTON')}
            </Button>
          )}
        </Card>
        <Divider marginY={'10%'} />
      </>
    );
  };

  const renderSkeletons = () => {
    if (rides === undefined) {
      return (
        <View justifyContent={'center'} alignItems={'center'} marginTop={'10%'}>
          <Text fontFamily={'Roboto-Regular'} fontSize={15}>
            {t('SEARCH_RIDES.SEARCH_FOR_RIDES')}
          </Text>
        </View>
      );
    }

    if (rides.length === 0) {
      return (
        <View justifyContent={'center'} alignItems={'center'} marginTop={'10%'}>
          <Text fontFamily={'Roboto-Regular'} fontSize={15}>
            {t('SEARCH_RIDES.NO_RIDES_FOUND')}
          </Text>
        </View>
      );
    }

    if (loading || loadingMore) {
      return <RideCardSkeleton />;
    }

    return null;
  };

  const renderRides = () => {
    return (
      <FlatList
        data={rides}
        renderItem={renderItem}
        ListHeaderComponent={renderSearchCard}
        ListFooterComponent={renderSkeletons}
        onEndReached={onSearchMore}
        onEndReachedThreshold={0.3}
      />
    );
  };

  return (
    <View flex={1} backgroundColor={'white'}>
      {renderRides()}
    </View>
  );
};

export default SearchRides;

const styles = StyleSheet.create({
  shadowContainerAndroid: {
    backgroundColor: 'white',
    elevation: 5,
    padding: 16,
    borderRadius: 8,
  },
  shadowContainerIOS: {
    marginTop: '10%',
    borderRadius: 0,
    padding: '5%',
    shadowColor: 'blue.600',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});
