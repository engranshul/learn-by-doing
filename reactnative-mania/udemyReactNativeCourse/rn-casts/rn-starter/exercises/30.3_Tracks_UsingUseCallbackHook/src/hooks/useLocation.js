
import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {

  console.log("shouldTrack(isFocused) value in uselocation hook is", shouldTrack)
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      console.log("in function start watching async..");
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      // watchPositionAsync takes two arguments..
      // First argument are some map options
      // Second argument is callback.This function is called on each
      // location update. It is passed exactly one parameter: an object
      // representing Location type.
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, // Minimum time to wait between each update in milliseconds.
          distanceInterval: 10,
        },
        callback // here this callback will be called multiple times with location as param..
      );
      // watchPositionAsync Returns a promise resolving to a subscription object..which has
      // one field named remove.Call this option with no arguments to remove this subscription
      // The callback will no longer be called for location updates..
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  }; 4

  useEffect(() => {
    console.log("useEffect getting called as shouldTrack has changed..")
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove(); // removing dangling subscriber important
      setSubscriber(null);
    }
  }, [shouldTrack, callback]);

  return [err];
};


/*
30.1 PROBLEM STATEMENT :
useLocation hook takes two inputs : shouldTrack and a callback

This callback definition is provided by TrackCreateScreen and internally
this callback calls addLocation(location, state.recording)


Whenever TrackCreateScreen rerenders it create new version of callback
with the latest value of state.recording


Problem is that watchPositionAsync keeps running the old callback
in which the value of recording is false..Reason for this is that
useEffect does nt run second time as shouldTrack(isFocused) is not
changed(recording flag is changed)..due to this startWatching does
nt ran..so nobody tells the old version of start watching to use the
new version of callback that is passed in..and this old callback still
has recording set to false..

Due to this nothing gets added to location array..(this is the problem)


QUICK NOTE : useEffect in this file depends on shouldTrack(isFocused).
This flag will get true as soon as we land on TrackCreateScreen.
However this flag is different from "recording" flag in LocationContext.

There updated value of recording flag should reach inside callback
defined in watchPositionAsyn method in this file so that when
addLocation method is called from inside of callback, updated value
of recording flag gets processed..

*/


/*
30.2 PROBLEM STATEMENT : in this we will try to fix this..

In this we will try to fix locations array not getting populated
by adding dependency of callback in useEffect in this file..

By this will instead of fixing will introduce a NASTY BUG

Lets see the series of events :
TrackCreateScreen rerenders in case some of its state(may be recording) gets changed
TrackCreateScreen builds a brand new version of callback
useEffect in useLocation gets that new callback
React looks at the dependency array in useEffect and sees the brand new version of callback
React reruns useEffect
Due to above link startWatching invoked again and thereby watchPositionAsync
Now callback in startWatching will refer to the latest version of callback

Problem with this approach is that we r calling startWatching many a times..

*/


/* 
30.3 : PROBLEM STATEMENT : we r calling startWatching many a times..

In this version..we will make use of useCallback hook in TrackCreateScreen..

useCallback limits the number of times new callback function gets created
when TrackCreateScreen rerenders..in this case new callback only gets 
created if recording flag changes

Due to this change useEffect is not called multiple times as callback 
function does nt change that frequently


By this point out start and stop recording will work fine

Our location array will get populated when start recording starts
and our location array stops getting populated when we press stop
recording..


But still problem is not fully solved..Although we have solved the
number of times useEffect executes..
In case callback function changes we gonna run useEffect..

As we know we are calling startWatching inside useEffect and
startWatching is creating subscribers..
So dependending upon the library(expo location) implementation,
it could be possible that we have create multiple subscribers 
although we dont want this behaviour.

*/