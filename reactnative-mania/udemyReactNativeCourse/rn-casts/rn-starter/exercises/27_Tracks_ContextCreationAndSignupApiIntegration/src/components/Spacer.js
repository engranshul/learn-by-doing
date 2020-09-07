import React from 'react';
import { View, StyleSheet } from 'react-native';

/* check out this children as parameter */
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;

/* 
perfect example where in we create a component to provide some default
styles to other components..
*/