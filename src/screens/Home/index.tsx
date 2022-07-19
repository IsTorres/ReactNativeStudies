import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
      return (
        <View style={styles.container}>
          <Button
            title="Form"
            onPress={() =>
              navigation.navigate('Form')
            }
          />
          <Button
            title="Select"
            onPress={() =>
              navigation.navigate('Select')
            }
          />
          <Button
            title="Sliderzinho"
            onPress={() =>
              navigation.navigate('Sliderzinho')
            }
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
      marginTop: 50,
    },
});

export default HomeScreen;