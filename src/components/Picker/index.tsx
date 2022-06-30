import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Title from "../Title";

const Select = () => {
    const [currency, setCurrency] = useState('US Dollar');

    return (
        <View>
            <Title title='Currency' />
            <View>
                <TextInput placeholder="Email" />
                <TextInput placeholder="Password" secureTextEntry />
                <Picker
                    selectedValue={currency}
                    onValueChange={(itemValue) => setCurrency(itemValue)}
                >
                    <Picker.Item label="USD" value="US Dollar" />
                    <Picker.Item label="EUR" value="Euro" />
                    <Picker.Item label="BRL" value="Brazilian Real" />
                </Picker>
                <Text>
                    Selected: {currency}
                </Text>
            </View>
        </View>
    );
};

export default Select;