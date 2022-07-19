import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultImc(props: { messageResult: any; resultImc: any; }) {
    const { messageResult, resultImc } = props;

    const infoImc = () => {
        if (resultImc) {
            if (resultImc < 18.5) {
                return "Você está abaixo do peso";
            } else if (resultImc >= 18.5 && resultImc <= 24.9) {
                return "Você está no peso ideal";
            } else if (resultImc >= 25 && resultImc <= 29.9) {
                return "Você está acima do peso";
            };
        };
    };

    return (
        <View>
        <Text style={styles.text}>{`${messageResult} ${resultImc ? resultImc : ''}`}</Text>
        <Text style={styles.text}>{infoImc()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00bcd4",
        marginBottom: 30,
    },
});