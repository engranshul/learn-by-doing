import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      {/* navigationevents is one way that does some actions based
      on when user land or go away from screen */}
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

/* to stop displaying any header.. */
SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;


/* In React Navigation 4.x, there were 4 navigation events to 
notify focus state of the screen:

willFocus: emitted when screen comes into focus
didFocus: emitted when the transition animation for focus finishes
willBlur: emitted when the screen goes out of focus
didBlur: emitted when the transition animation for blur finishes

https://reactnavigation.org/docs/upgrading-from-4.x/#navigation-events
 */
