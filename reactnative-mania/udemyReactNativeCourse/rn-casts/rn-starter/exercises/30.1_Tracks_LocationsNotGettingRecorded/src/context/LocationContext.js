import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  console.log("value of state is.....",state)
  console.log("action type is",action.type)
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name });
};
const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = dispatch => (location, recording) => {
  /* beautiful concept here..only if recording flag is true we add 
  location in location array else we just update current location
  to show cicle marker in map showing current location */
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: '', recording: false, locations: [], currentLocation: null }
);
