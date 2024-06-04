import { SafeAreaView, StyleSheet, View } from 'react-native';

import Botao from "./src/components/Botao"
import Visor from "./src/components/Visor"

export default function App() {

  adicionarDigito = n => {
    console.warn(`adicionando dígito ${n}`)
  }

  limparMemoria = () => {
    console.warn(`limpando a memória`)
  }
  
  setOperacao = () => {
    console.warn(`setando a operação`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Visor />
      <View style={styles.botoes}>
      <Botao label="AC" triplo onClick={limparMemoria}/>
      <Botao label="/" operacao onClick={setOperacao}/>
      <Botao label="7" onClick={adicionarDigito}/>
      <Botao label="8"/>
      <Botao label="9"/>
      <Botao label="*" operacao />
      <Botao label="4"/>
      <Botao label="5"/>
      <Botao label="6"/>
      <Botao label="-" operacao />
      <Botao label="1"/>
      <Botao label="2"/>
      <Botao label="3"/>
      <Botao label="+" operacao />
      <Botao label="0" dobro />
      <Botao label="."/>
      <Botao label="=" operacao />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#900'
  },
});
