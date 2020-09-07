import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

/* All the files that are not react components and they
want functionality of navigation..dn they have to do 
something like this so that they can navigate 
Another change that they have to do is to have this
functionality is to call setNavigator from App.js file
*/
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      /* using current state object and overriding error 
      message in it..*/

      return { ...state, errorMessage: action.payload };
    case 'signup':
      /* concept that once successfull signup happens..we 
      reset error msg to blank string and set token */
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

/* An asynchronous, unencrypted, persistent, key-value storage system
 for React Native.
https://github.com/react-native-community/async-storage */

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    // setting a field name token and then u can get it anytime
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    // way to navigate when u dont have navigation object..
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

const signout = dispatch => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
