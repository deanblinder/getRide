import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { useEffect, useState } from 'react';
import { Point } from 'react-native-google-places-autocomplete';
import { googleMapsActions } from '../../actions';
import { Location as LocationData } from '../../typing';

export type Props = {
  rideData?: {
    origin?: LocationData;
    destination?: LocationData;
  };
  rideSearchData?: {
    origin?: LocationData;
    destination?: LocationData;
  };
  routeNumber?: number;
  numbersOfRoutes?: (numberOfRoutes: number) => void;
};

export const INITIAL_REGION = {
  latitude: 32.78376,
  longitude: 34.98557,
};

const usePresenter = (props: Props) => {
  const { rideData, numbersOfRoutes } = props;
  const userLocation = useSelector((state: AuthState) => state.userLocation);
  const [initialRegion, setInitialRegion] = useState<Point | undefined>({
    lat: userLocation?.lat || INITIAL_REGION.latitude,
    lng: userLocation?.lng || INITIAL_REGION.longitude,
  });
  const [routes, setRoutes] = useState<any[]>([]);

  useEffect(() => {
    if (rideData?.origin?.location && rideData?.destination?.location) {
      setInitialRegion(rideData?.origin?.location);
      getRouteCoordinates({
        origin: rideData?.origin?.location,
        destination: rideData?.destination?.location,
      });
    }
  }, [rideData?.origin, rideData?.destination]);

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

  return {
    routes,
    rideData,
    initialRegion,
    userLocation,
  };
};

export default usePresenter;
