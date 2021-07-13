import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styled from "styled-components"

function StyledComponentsExample() {
  const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: palevioletred;
  `;
  return (
    <Container>
      <Title>React Native with 💅 Styled Components</Title>
    </Container>
  );
}

StyleSheet.create({});

export default StyledComponentsExample;


/* 
*learnt how styled components can be used to write css like 
syntax in react native
*reference link : https://styled-components.com/docs/basics
*/
