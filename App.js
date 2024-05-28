import { SafeAreaView, StyleSheet, View } from 'react-native';

import Botao from "./src/components/Botao"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.botoes}>
      <Botao label="7"/>
      <Botao label="8"/>
      <Botao label="9"/>
      <Botao label="*"/>
      <Botao label="4"/>
      <Botao label="5"/>
      <Botao label="6"/>
      <Botao label="-"/>
      <Botao label="1"/>
      <Botao label="2"/>
      <Botao label="3"/>
      <Botao label="+"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#900'
  },
});
