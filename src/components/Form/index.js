import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultImc from "../ResultImc";

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
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex.: 70.5"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <Button title={textButton} onPress={() => ValidateImc()} />
      </View>
      <ResultImc messageResult={messageResult} resultImc={imc} />
    </View>
  );
}
