import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.contentContainer}>
              <View style={styles.rightContainer}></View>
              <View style={styles.leftContainer}></View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        width: "100%",
        flexDirection: "row",
        aspectRatio: 10/3,
    },
    rightContainer: {
        flex: 1,
        height: "100%",
        backgroundColor: "green",
    },
    leftContainer: {
        flex: 1,
        height: "100%",
        backgroundColor: "yellow",
    }
});
