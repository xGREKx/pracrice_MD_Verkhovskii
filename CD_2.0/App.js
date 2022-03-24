import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
import App2 from './components/App2';
import { Card } from 'react-native-paper';




const  App=() => {
  return (
    <View style={styles.container}>
     <Card>
       <Text></Text>
      </Card>
      <Text style={styles.paragraph}>
       Hello, world!
      </Text>
      <Card>
       <Text></Text>
      </Card>
      
      <AssetExample />
      <App2 />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f3f4f4',
    padding: 50,
  },
  paragraph: {
    backgroundColor: '#cbcacc',
    margin: 44,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;