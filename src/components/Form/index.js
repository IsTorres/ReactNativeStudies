import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Dale</Text>
                <TextInput placeholder="Type here to translate!" />
                <Text>Dale</Text>
                <TextInput placeholder="Dale" />
            </View>
        </View>
    );
}