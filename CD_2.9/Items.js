import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
export default function ExerciseItem(props) {
  return (
    <View style={{}}>
        <View style={{backgroundColor:'#d6d6d6'}}>
      <Text style={styles.exerciseItemNameText}>{props.name}</Text>
        </View>
    <View style={styles.exerciseItemContainer}>
    
      <FontAwesome5 name={props.iconName} style={styles.exerciseItemIcon} color={props.color}/>
      <ScrollView
        style={styles.exerciseItemTextContainer}
        showsVerticalScrollIndicator={false}
        justifyContent="center"
      >
      
        <Text style={styles.exerciseItemPlainText}>{props.description}</Text>
      </ScrollView>
     
     
       <View style={{paddingTop:'15%', paddingRight:'5%', flexDirection: "row",}}>
      <Text style={{fontSize:13}}>Смотреть товар</Text>
      <Ionicons name="return-down-forward-outline" size={24} color="#add8e6" />
      </View>
    </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  exerciseItemContainer: {
    width: "100%",
    height: 100,
    borderBottomColor: "#add8e6",
    borderBottomWidth: 5,
    padding: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseItemIcon: { fontSize: 90 },
  exerciseItemTextContainer: {
    width: "60%",
    height: "94%",
    
    
  },

  exerciseItemNameText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color:'#222222'

  },
  exerciseItemPlainText: {
    textAlign: "justify",
    fontSize: 18,
    paddingLeft:'10%',
     color:'#222222'
    
  },
});