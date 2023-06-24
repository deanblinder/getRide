import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useEffect, useState } from 'react';
import { Location } from '../../typing';
import { Ride } from '../../components/rideCard/usePresenter';

const usePresenter = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );
  const [rides, setRides] = useState<Ride[] | undefined>(undefined);
  const [shouldShowRides, setShouldShowRides] = useState(false);

  const getOrigin = (origin: Location) => {
    setOrigin(origin);
  };

  const getDestination = (destination: Location) => {
    setDestination(destination);
  };

  const onOriginPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };
  const onDestinationPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };

  

    useEffect(() => {
        getRides();
    }, []);
    
    const getRides = () => {
        const avatarImage = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';
        const rides = [{
            id: 1,
            origin:{
                formatted_address:'tel aviv',
                location: {
                    lng: 34.775517,
                    lat: 32.0986505,
                }
                
            },
            destination:{
                formatted_address:'haifa',
                location: {
                    lng: 34.985569,
                    lat: 32.783760,
                }
                
            },
            hour: '12:00',
            date: '12 jun',
            image: avatarImage,
            seats: 3,
            price: 50,
            name: 'david',
            phone: '054-1234567',
        },{
            id: 2,
            origin:{

                formatted_address:'tel aviv',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
                
            },
            destination:{
                formatted_address:'atlit',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            hour: '12:00',
            date: '12 jun',
            image: avatarImage,
            seats: 3,
            price: 50,
            name: 'dudu',
            phone: '054-1234567',
        },
        {
            id: 3,
            origin:{
                formatted_address:'tel aviv',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            destination:{
                formatted_address:'ramat gan',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            hour: '11:00',
            date: '15 jun',
            image: avatarImage,
            seats: 2,
            price: 20,
            name: 'tom',
            phone: '054-1234567',
        },
        {
            id: 4,
            origin:{
                formatted_address:'eilat',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            destination:{
                formatted_address:'kfar saba',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            hour: '17:00',
            date: '19 jun',
            image: avatarImage,
            seats: 1,
            price: 10,
            name: 'moshe',
            phone: '054-1234567',
        },
        {
            id: 5,
            origin:{
                formatted_address:'haifa',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            destination:{
                formatted_address:'nahaariya',
                location: {
                    lng: 34.7818,
                    lat: 32.0853,
                }
            },
            hour: '05:00',
            date: '12 dec',
            image: avatarImage,
            seats: 7,
            price: 1,
            name: 'shlomo',
            phone: '054-1234567',
        }
    ];
        setRides(rides);
    };
    const onSearchPress = () => {
        setShouldShowRides(true);
    };
  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    rides,
    shouldShowRides,
    onSearchPress
  };
};
export default usePresenter;
