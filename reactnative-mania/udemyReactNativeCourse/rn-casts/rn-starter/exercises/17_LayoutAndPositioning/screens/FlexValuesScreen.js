import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function FlexValuesScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>child 1</Text>
            <Text style={styles.textTwoStyle}>child 2</Text>
            <Text style={styles.textThreeStyle}>child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textOneStyle: { margin: 1, borderWidth: 1, padding: 1,flex : 1,backgroundColor: "red" },
    textTwoStyle: { margin: 1, borderWidth: 1, padding: 1 ,flex : 2 ,alignSelf : "center",backgroundColor : "green"},
    textThreeStyle: { margin: 1, borderWidth: 1, padding: 1, flex: 2 , backgroundColor : "blue" },
    viewStyle: { height : 400,borderWidth: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between" },
});
export default FlexValuesScreen;

/*
Below properties are applied to child elements :
flex : 1 or any integer
align-self

Alignself can be used on child elements to override align-items on parent element..

Remember many a times each property has some default value but we can 
change that..

*/

