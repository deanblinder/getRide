import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dialog } from '@rneui/themed';
import { googleMapsActions } from '../../actions/index';
import { Location as LocationData } from '../../typing';
import { Point } from 'react-native-google-places-autocomplete';

export type Props = {
  origin?: LocationData;
  destination?: LocationData;
};

const ROUTE = {
  origin: { latitude: 32.08578, longitude: 34.77559 },
  destination: { latitude: 32.78376, longitude: 34.98557 },
};

const MapViewScreen = (props: Props) => {
  const { origin, destination } = props;
  const [initialRegion, setInitialRegion] = useState<Point | undefined>({
    lat: 32.78376,
    lng: 34.98557,
  });
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  useEffect(() => {
    // getLocationAsync();
    if (origin && destination) {
      setInitialRegion(origin.location);
      getRouteCoordinates({
        origin: origin.location,
        destination: destination.location,
      });
    }
  }, [origin, destination]);

  // const getLocationAsync = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     console.log('Permission to access location was denied');
  //     return;
  //   }
  //
  //   let location = await Location.getCurrentPositionAsync({});
  //   setLocation(location);
  // };

  const getRouteCoordinates = async (props: {
    origin: Point;
    destination: Point;
  }) => {
    const points = await googleMapsActions.getRouteCoordinates({
      origin: props?.origin,
      destination: props?.destination,
    });
    const decodedPoints = googleMapsActions.decodePolyline(points);
    setRouteCoordinates(decodedPoints);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: initialRegion?.lat ?? ROUTE?.origin.latitude,
          longitude: initialRegion?.lng ?? ROUTE?.destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        initialRegion={{
          latitude: ROUTE?.origin.latitude,
          longitude: ROUTE?.destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Start point"
        />
        <Marker
          coordinate={{
            latitude: destination?.location.lat,
            longitude: destination?.location.lng,
          }}
          title="End point"
        />
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
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
