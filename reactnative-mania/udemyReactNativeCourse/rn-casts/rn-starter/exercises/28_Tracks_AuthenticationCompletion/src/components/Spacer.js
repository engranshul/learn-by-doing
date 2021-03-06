import React from 'react';
import { View, StyleSheet } from 'react-native';

/* component that is used only for styling.. */
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;
