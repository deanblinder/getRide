import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'native-base';
import usePresenter from './usePresenter';
import RideCard from '../../components/rideCard';
import RideCardSkeleton from '../../components/rideCardSkeleton';
import { useTranslation } from 'react-i18next';

const Rides = () => {
  const { t, i18n } = useTranslation();
  const { upcomingRides, loading } = usePresenter();

  if (loading) {
    return <RideCardSkeleton />;
  }

  if (upcomingRides.length === 0)
    return (
      <View padding={'5%'} backgroundColor={'white'} flex={1}>
        <Text
          fontSize={'2xl'}
          textAlign={i18n.language === 'he' ? 'right' : 'left'}
        >
          {t('UPCOMING_RIDES.NO_UPCOMING_RIDES')}
        </Text>
      </View>
    );

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{
        backgroundColor: 'white',
        display: 'flex',
        paddingBottom: '5%',
      }}
    >
      <Text
        textAlign={i18n.language === 'he' ? 'right' : 'left'}
        style={{ padding: '5%' }}
        fontSize={'2xl'}
        fontFamily={'Roboto-Regular'}
      >
        {t('UPCOMING_RIDES.UPCOMING_RIDES')}
      </Text>
      {upcomingRides.map((ride, index) => (
        <RideCard key={index} ride={ride} />
      ))}
    </ScrollView>
  );
};

export default Rides;
