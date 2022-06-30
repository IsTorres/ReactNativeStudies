import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultImc(props) {
  return (
    <View>
      <Text style={styles.text}>{`${props.messageResult} ${props.resultImc ? props.resultImc : ''}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00bcd4",
        marginBottom: 30
    },
});