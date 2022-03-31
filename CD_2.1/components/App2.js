import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Linking } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App2 = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button style={styles.butt}
        title="Читать полностью"
         color="black"
        onPress={ ()=>{ Linking.openURL('https://sberbusiness.live/publications/gromkii-biznes-kak-otkryt-svoiu-studiiu-zvukozapisi')}}
      />
    </View>
    <Separator />
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
    butt: {

    
  },
  container: {
    marginTop: -20,
    justifyContent: 'left',
    marginHorizontal: 95,
  },

  separator: {
    
    marginVertical: 8,
    borderBottomColor: '#836eb3',

  },
});

export default App2;