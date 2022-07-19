import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, SafeAreaView } from "react-native";
import ResultImc from "../ResultImc";
import Title from "../Title";
import styles from "./styles";

const Form = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [height, setHeight] = useState<any>(null);
  const [weight, setWeight] = useState<any>(null);
  const [imc, setImc] = useState<any>(null);
  const [messageResult, setMessageResult] = useState(
    "Preencha todos os campos"
  );
  const [textButton, setTextButton] = useState("Calcular");
    
  const home =  () => { props.navigation.navigate("Home"); }
   
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
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

export default Form;
