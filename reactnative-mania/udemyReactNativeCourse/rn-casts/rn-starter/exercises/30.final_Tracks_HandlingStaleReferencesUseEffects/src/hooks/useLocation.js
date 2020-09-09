import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error('Location permission not granted');
        }
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};


/* 
Final : This final version will solve all functionality and performance
issues related to location

Tip 1 : DNt refer state,props or context values without adding them
to our dependency list..if u are using any of these in useEffect do
add them to dependency array.This way useEffect will always have access
to latest values

Tip 2 : State setter functions need NOT to be added to dependency list
Bcoz state setters are not recreated..state gets recreated

Tip 3 : Dont define helper functions that refer props,state or context
outside of useEffect..this is generally not mandatory but it helps
to find what all we have to add in dependency array of useEffect

Tip 4 : Due to implementing tip 3 we should add subscriber in useEffect
dependency array ????

Do we really need to rerender component if we get subscriber back..??
Subscriber is 100% localized to hook..we dont use it elsewhere

Instead use LET for subscriber

*/

