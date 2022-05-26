import * as React from 'react';
import { useEffect } from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';
import Items from "./Items";
import Header from "./Header";

import { Card } from 'react-native-paper';



export default function App() {
   const backAction = () => {
    Alert.alert("Покинуть приложение?", "", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Да", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const renderItem = (item) => {
    return (
      <Items
        iconName={item.item.iconName}
        name={item.item.name}
        description={item.item.description}
        color={item.item.color}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  return (
    <View>
      <Header />
      <FlatList
        style={styles.exercisesFlatListContainer}
        data={exercisesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesFlatListContainer: { width: "100%", height: "89%" },
});

const exercisesData = [
  {
    id: 0,
    iconName: "headset",
    name: "Мониторные наушники",
    description:
      "AKG",
    color:'#999999'
  },
  {
    id: 1,
    iconName: "guitar",
    name: "Электрогитара",
    description:
      "Gibson",
    color:'#955f20'
  },
  {
    id: 2,
    iconName: "drum",
    name: "Рабочий барабан",
    description:
      "Yamaha",
        color:'black'
  },
  {
    id: 3,
    iconName: "headset",
    name: "Наушники для записи",
    description:
      "Pioneer",
        color:'#999999'
  },
  {
    id: 4,
    iconName: "drum",
    name: "Напольный том",
    description:
      "Gretsch",
      color:'black'
  },
  {
    id: 5,
    iconName: "guitar",
    name: "Бас-гитара",
    description:
      "Fender",
      color:'#7d726d'
  },
  {
    id: 6,
    iconName: "guitar",
    name: "Укулеле",
    description: "Yamaha",
    color:'#9f8170'
  },
];