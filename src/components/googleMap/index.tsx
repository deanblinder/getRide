import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { googleMapsActions } from '../../actions/index';
import { Location as LocationData } from '../../typing';
import { Point } from 'react-native-google-places-autocomplete';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';

export type Props = {
  origin?: LocationData;
  destination?: LocationData;
  routeNumber?: number;
  numbersOfRoutes?: (numberOfRoutes: number) => void;
};

const ROUTE = {
  origin: { latitude: 32.08578, longitude: 34.77559 },
  destination: { latitude: 32.78376, longitude: 34.98557 },
};

const MapViewScreen = (props: Props) => {
  const { origin, destination, numbersOfRoutes, routeNumber } = props;
  const userLocation = useSelector((state: AuthState) => state.userLocation);
  const [initialRegion, setInitialRegion] = useState<Point | undefined>({
    lat: userLocation?.lat || 32.78376,
    lng: userLocation?.lng || 34.98557,
  });
  const [routes, setRoutes] = useState<any[]>([]);
  useEffect(() => {
    if (origin?.location && destination?.location) {
      setInitialRegion(origin?.location);
      getRouteCoordinates({
        origin: origin?.location,
        destination: destination?.location,
      });
    }
  }, [origin, destination]);

  const getRouteCoordinates = async (props: {
    origin: Point;
    destination: Point;
  }) => {
    const routes = await googleMapsActions.getRouteCoordinates({
      origin: props?.origin,
      destination: props?.destination,
    });

    const polyLines = routes.map((route: any) => {
      return route.overview_polyline;
    });

    const points = polyLines.map((polyline: any) => {
      return googleMapsActions.decodePolyline(polyline.points);
    });

    numbersOfRoutes?.(points.length);
    setRoutes(points);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude:
            props.origin?.location?.lat ??
            initialRegion?.lat ??
            ROUTE?.origin.latitude,
          longitude:
            props.origin?.location?.lng ??
            initialRegion?.lng ??
            ROUTE?.destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        initialRegion={{
          latitude: props.origin?.location?.lat ?? ROUTE?.origin.latitude,
          longitude:
            props.origin?.location?.lng ?? ROUTE?.destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {origin?.location?.lat && origin?.location?.lng && (
          <Marker
            coordinate={{
              latitude: origin?.location?.lat,
              longitude: origin?.location?.lng,
            }}
            title="Start point"
          />
        )}
        {destination?.location?.lng && destination.location.lat && (
          <Marker
            coordinate={{
              latitude: destination?.location?.lat,
              longitude: destination?.location?.lng,
            }}
            title="End point"
          />
        )}
        {userLocation && (
          <Marker
            pinColor="purple"
            coordinate={{
              latitude: userLocation?.lat,
              longitude: userLocation?.lng,
            }}
            title="My location"
          />
        )}
        {origin && destination && (
          <Polyline
            coordinates={routes[routeNumber || 0]}
            strokeWidth={3}
            strokeColor="red"
          />
        )}
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
