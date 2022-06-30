import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import ResultImc from "../ResultImc";
import Title from "../Title";
import styles from "./styles";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageResult, setMessageResult] = useState(
    "Preencha todos os campos"
  );
  const [textButton, setTextButton] = useState("Calcular");

  const imcCalc = () => {
    return setImc((weight / (height * height)).toFixed(2));
  };

  const ValidateImc = () => {
    if (height && weight) {
      setTextButton("Calculando...");
      imcCalc();
      setHeight(null);
      setWeight(null);
      setMessageResult("Seu Imc é: ");
      setTextButton("Calcular novamente");
      return
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessageResult("Preencha todos os campos");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Title title='IMC CALC' />
        <Text style={styles.text}>Altura</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text style={styles.text}>Peso</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ex.: 70.5"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <TouchableOpacity style={styles.buttonCalculator} onPress={() => ValidateImc()}><Text style={styles.buttonText}>{textButton}</Text></TouchableOpacity>
        <ResultImc messageResult={messageResult} resultImc={imc} />
      </View>
    </View>
  );
}
