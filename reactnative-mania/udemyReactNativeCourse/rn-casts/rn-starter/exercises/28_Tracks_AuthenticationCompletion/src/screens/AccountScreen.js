import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    /* safeareaview is used to show elements in safearea..not in
    topmost header.. */
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;


/* 
More about safeareaview :

By default, React Navigation aids in ensuring your application displays 
correctly on the iPhone X and other devices with notches and "safe areas". 
It does so by using SafeAreaView inside of UI elements that may interact 
with the sensor cluster ("the notch") or the home activity indicator.

The goal is to (a) maximize usage of the screen (b) without hiding content
or making it difficult to interact with by having it obscured by a physical
display cutout or some operating system UI.

*/
