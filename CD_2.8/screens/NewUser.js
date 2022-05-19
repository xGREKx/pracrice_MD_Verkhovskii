import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';
export default function NewUser({ route }) {
  return (
    <View
        style={{
          flex: 1,
          justifyContent: 'center',
     
          padding: 40,
          paddingTop: 70,
          backgroundColor: '#3fb4c6'
        }}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{route.params.message}</Text>
      </View>
      <View>
        <View style={styles.plainTextContainer}>
          <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10,
            color: 'black'
          }}>
            Ваш логин:{"\n"}
            {route.params.login}
          </Text>
        </View>
        <View style={styles.plainTextContainer}>
          <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10,
            color: 'black'
          }}>
            Ваш пароль:{"\n"}
            {route.params.password}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FAF8FF",
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  headerTextContainer: {
    width: "100%",
    padding: 10,
  },
  headerText: { fontSize: 25, fontWeight: "bold", textAlign: "center" },
  plainTextContainer: {
    width: "100%",
    padding: 20,
  },
  plainText: { fontSize: 15, color: "#7D7D7D", textAlign: "justify" },

});