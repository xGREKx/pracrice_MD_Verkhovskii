import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import App2 from './components/App2';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал SberBusiness
      </Text>
      <Card>
      <Text style={styles.textnews}>Бизнес идеи
      </Text>
        <AssetExample style={styles.c}/>
        <App2 />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    c: {
    flex: 1
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'silver',
    padding: 9,
  },
  textnews:{
    margin: 20,
    fontSize: 12,
    color:"grey"

  },
  paragraph: {
    margin: 12,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});