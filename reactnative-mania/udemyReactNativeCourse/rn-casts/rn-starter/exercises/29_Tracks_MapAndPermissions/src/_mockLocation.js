/* only for testing purpose..this class will work
only if you import it in some class.. */
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 50,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  /* this helps in emitting location events..this is just for testing
  purpose..to get different locations even if you dont move ur mobile
  device.. */
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
