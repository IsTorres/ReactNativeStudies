import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex.: 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput placeholder="Ex.: 70.5" keyboardType="numeric" />
            </View>
        </View>
    );
}