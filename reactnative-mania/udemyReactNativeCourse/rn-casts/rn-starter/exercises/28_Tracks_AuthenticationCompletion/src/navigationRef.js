import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = s => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    /* navigationactions usage..check this out */
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

/* this file will only be used for cases when navigation object is
not available in a file and it want that functionality */