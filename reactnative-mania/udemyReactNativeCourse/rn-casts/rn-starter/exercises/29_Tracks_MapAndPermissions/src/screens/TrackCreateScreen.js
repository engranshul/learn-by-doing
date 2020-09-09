import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

/* expo-location allows reading geolocation information from 
the device.Your app can poll for the current location or subscribe 
to location update events. */
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      /* way to request location by using method 
      requestPermissionAsync.This method is defined
      in expo-location package */
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      /* method in expo-location package to read location
      updates while app is in foreground.. */
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      {/* displaying map logic in our custom Map component */}
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;



/* 
Method : Location.watchPositionAsync(options, callback)

Subscribe to location updates from the device. Please note that 
updates will only occur while the application is in the foreground.
To get location updates while in background you'll need to use 
Location.startLocationUpdatesAsync.

Parameter :
callback (function) --
This function is called on each location update. It is passed exactly 
one parameter: an object representing Location type.

Returns :
Returns a promise resolving to a subscription object, which has one 
field: remove (function) -- Call this function with no arguments to 
remove this subscription. The callback will no longer be called for 
location updates.

*/
