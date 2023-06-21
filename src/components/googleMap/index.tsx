import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dialog } from '@rneui/themed';
import { googleMapsActions } from '../../actions/index';
import { Coordinate } from '../../typing';

export type Props = {
  route?: {
    origin: Coordinate;
    destination: Coordinate;
  };
};

const ROUTE = {
  origin: { latitude: 32.08578, longitude: 34.77559 },
  destination: { latitude: 32.78376, longitude: 34.98557 },
};

const MapViewScreen = (props: Props) => {
  const [location, setLocation] = useState<Coordinate | undefined>(undefined);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    getLocationAsync();
    getRouteCoordinates();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  const getRouteCoordinates = async (props?: {
    origin: { latitude: number; longitude: number };
    destination: { latitude: number; longitude: number };
  }) => {
    const points = await googleMapsActions.getRouteCoordinates(ROUTE);
    const decodedPoints = googleMapsActions.decodePolyline(points);
    setRouteCoordinates(decodedPoints);
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
            title="My Location"
          />
          <Marker
            coordinate={{
              latitude: ROUTE.origin.latitude,
              longitude: ROUTE.origin.longitude,
            }}
            title="Start point"
          />
          <Marker
            coordinate={{
              latitude: ROUTE.destination.latitude,
              longitude: ROUTE.destination.longitude,
            }}
            title="End point"
          />
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={3}
            strokeColor="red"
          />
        </MapView>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            flex: 1,
          }}
        >
          <Dialog.Loading />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapViewScreen;
