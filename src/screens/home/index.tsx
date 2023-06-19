import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import usePresenter from './usePresenter';

const Home = () => {
  const { showFindRideScreen, showSearchRideScreen } = usePresenter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Choose Your Need</Text>
      <View>
        <Button
          radius={20}
          style={{ marginBottom: '5%' }}
          onPress={showFindRideScreen}
        >
          Find a Ride
        </Button>
        <Button radius={20} onPress={showSearchRideScreen}>
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
    // flexDirection: 'row',
  },
});
export default Home;
