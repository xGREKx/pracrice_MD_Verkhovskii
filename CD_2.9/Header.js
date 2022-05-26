
import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";


import { Ionicons } from '@expo/vector-icons'; 
export default function Header() {
  return (
    <View>
      <View style={styles.topContainer}></View>
      <View style={styles.mainContainer}>
        <Ionicons style = {{paddingLeft:'5%', paddingRight:'4%'}} name="headset-outline" size={44} color="#add8e6" />
        <Text style={styles.textInput}>Магазин звука</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  mainContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    padding: 5,
    paddingTop:10,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  textInput: {
    width: "65%",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 90,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 5,
    fontSize: 25,
  },
});