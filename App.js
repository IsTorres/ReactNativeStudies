import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form';
import Select from './src/components/Picker';
import Sliderzinho from './src/components/Slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      <Select />
      <Sliderzinho />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 50,
  },
});
