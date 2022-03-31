import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/studio.jpg')} />
      <Text style={styles.paragraph}>Громкий бизнес: как открыть свою студию звукозаписи</Text>
      <Text style={styles.textread}>В самом центре Москвы, на цокольном этаже собственного дома и даже в каморке за актовым залом — студию звукозаписи можно открыть где угодно. Редакция «Своего дела» выяснила, как начинают свой бизнес будущие лейблы и где грань между творчеством и бизнесом в музыкальной индустрии </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   textread: {
    margin: 24,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 220,
    width: 330,
  }
});