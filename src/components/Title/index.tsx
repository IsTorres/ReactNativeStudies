import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = (props: { title: string }) => {
    return (
        <View>
            <Text style={style.title}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
    }
});

export default Title;