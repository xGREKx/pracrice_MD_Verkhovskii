import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, backgroundColor: '#61D89F' }}>
      <Text style={styles.paragraph}>Эпоксидная смола - необычная идея для бизнеса
      </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#7277D8' }}>
      <Text style={styles.text2}>Интересное о бизнесе
      </Text></View>
      <View style={{ flex: 10, backgroundColor: '#61D89F' }}>
      <Text style={styles.text3}>Эпоксидная смола — материал, который можно использовать не только для отделки или строительства, но и для изготовления предметов интерьера, сувениров или украшений, а также необычной и элегантной мебели. Как запустить такой бизнес и сколько можно заработать на товарах из эпоксидной смолы, рассмотрим в статье.
      </Text> 
      <Button style={styles.butt}
        title="Читать далее"
         color="#65A6D1"
        onPress={ ()=>{ Linking.openURL('https://dengodel.com/interesting/epoksidnaya-smola.html')}}
      /></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',

  },
  text3: {
    margin: 25,
    marginTop:45,
    color:"white",
    fontFamily: "Times New Roman",
    fontSize: 22,
    
    textAlign: 'center',
  }, 
  text2: {
    margin: 20,
    marginTop:45,
    color:"white",
    fontFamily: "Times New Roman",
    fontSize: 24,
    textAlign: 'center',
  }, 
  paragraph: {
    margin: 50,
    marginTop:45,
    fontFamily: "Times New Roman",
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});