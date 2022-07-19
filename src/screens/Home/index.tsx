import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
      return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigation.navigate('Profile', { name: 'Jane' })
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