import { Text, SafeAreaView, StyleSheet } from 'react-native';

import Calculadora2 from './components/Calculadora2'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculadora2 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
