import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../Title";

const Sliderzinho = () => {
    const [value, setValue] = useState(0);
    return (
        <View>
            <Title title='Rate performace' />
            <View>
                <Text>Rate your performace this quarter</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={value}
                    onValueChange={(value) => setValue(value)}
                    minimumTrackTintColor="#1fb28a"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#b9e4c9"
                />
                <Text style={styles.value}>{value.toFixed(1)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    value: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        marginTop: 10,
    }
});

export default Sliderzinho;
