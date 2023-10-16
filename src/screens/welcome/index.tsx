import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import usePresenter from './usePresenter';
import { Button, Text ,View} from 'native-base';

const Welcome = () => {
  const { onHaveAccountPressed, onSignupPressed } = usePresenter();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: 'white' }}
    >
      <Text fontSize={'3xl'}>Welcome</Text>
      <View flexDirection={'row'}>
        <Button onPress={onSignupPressed}>
          Sign Up
        </Button>
        <Button onPress={onHaveAccountPressed}>Already have account</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
  },
});

export default Welcome;
