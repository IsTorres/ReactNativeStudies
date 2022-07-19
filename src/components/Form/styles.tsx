import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonCalculator: {
        width: "90%",
        backgroundColor: "#00bcd4",
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00bcd4"
    },
    inputText: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#00bcd4",
        borderWidth: 1,
        height: 60,
        margin: 12,
        paddingLeft: 25,
        fontSize: 20,
    },
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center"
    }
});

export default styles;
