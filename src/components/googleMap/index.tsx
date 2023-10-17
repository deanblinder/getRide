import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import usePresenter, { INITIAL_REGION, Props } from './usePresenter';

const MapViewScreen = (props: Props) => {
  const { routeNumber, rideSearchData } = props;
  const { routes, rideData, initialRegion, userLocation } = usePresenter(props);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude:
            rideData?.origin?.location?.lat ??
            initialRegion?.lat ??
            INITIAL_REGION.latitude,
          longitude:
            rideData?.origin?.location?.lng ??
            initialRegion?.lng ??
            INITIAL_REGION.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        initialRegion={{
          latitude: rideData?.origin?.location?.lat ?? INITIAL_REGION.latitude,
          longitude:
            rideData?.origin?.location?.lng ?? INITIAL_REGION.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {rideData?.origin?.location?.lat && rideData?.origin?.location?.lng && (
          <Marker
            coordinate={{
              latitude: rideData?.origin?.location?.lat,
              longitude: rideData?.origin?.location?.lng,
            }}
            title={rideData?.origin.formatted_address}
          />
        )}
        {rideData?.destination?.location?.lng &&
          rideData?.destination.location.lat && (
            <Marker
              coordinate={{
                latitude: rideData?.destination?.location?.lat,
                longitude: rideData?.destination?.location?.lng,
              }}
              title={rideData.destination.formatted_address}
            />
          )}
        {rideSearchData && (
          <Marker
            coordinate={{
              latitude: rideSearchData?.destination?.location?.lat!,
              longitude: rideSearchData?.destination?.location?.lng!,
            }}
            title={rideSearchData?.destination?.formatted_address}
            pinColor={'blue'}
          />
        )}
        {rideSearchData && (
          <Marker
            coordinate={{
              latitude: rideSearchData?.origin?.location?.lat!,
              longitude: rideSearchData?.origin?.location?.lng!,
            }}
            title={rideSearchData?.origin?.formatted_address}
            pinColor={'blue'}
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
        {rideData?.origin && rideData?.destination && (
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
