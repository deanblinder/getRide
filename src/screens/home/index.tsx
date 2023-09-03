import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Button } from '@rneui/base';
import usePresenter from './usePresenter';

const Home = () => {
  const { showFindRideScreen, showSearchRideScreen } = usePresenter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Button
          color={'white'}
          radius={10}
          style={{ marginBottom: '5%' }}
          onPress={showFindRideScreen}
          titleStyle={{ color: 'grey' }}
        >
          Offer a ride
        </Button>
        <Button
          color={'white'}
          radius={10}
          onPress={showSearchRideScreen}
          titleStyle={{ color: 'grey' }}
          style={{ marginBottom: '5%' }}
        >
          Search a ride
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
export default Home;
