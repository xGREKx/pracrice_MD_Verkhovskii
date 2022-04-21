import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Alert, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import App2 from './components/App2';
import { Card } from 'react-native-paper';
import About from "./About";
import Prof from "./prof"
const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createStackNavigator();

function Feed({ navigation }) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>Мои данные</Text>
      <Image style={styles.logo} source={require('./assets/prof.jpg')}/>
      <Text style={styles.textread}>Мой телефон:</Text>
      <Text style={styles.phonetext}>+7(812)634-98-64</Text>
      <Text style={styles.text_cont, {marginBottom:25, fontWeight: 'bold'}}>Частые контакты:</Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
         <Image style={styles.logo2} source={require('./assets/prof3.jpg')}/>
         <Text style={styles.text_forcont}>Терапевт</Text>
         <Text style ={styles.text_phone2, {marginBottom:-5}}>+7(812)387-66-19</Text>
         <Pressable
        onPress={() => navigation.navigate('Профиль Терапевта')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>профиль</Text>
      </Pressable>
      </View>
      <View style={{marginStart:60,}}>
         <Image style={styles.logo2} source={require('./assets/prof4.jpg')}/>
         <Text style={styles.text_forcont}>Миротворец</Text>
         <Text style ={styles.text_phone2, {marginBottom: -5}}>+7(812)810-51-44</Text>
          <Pressable
        onPress={() => navigation.navigate('Профиль Терапевта')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>профиль</Text>
      </Pressable>
      </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop:70, }}>
      <Text style={{textAlign: 'center',marginBottom:10, fontSize:15,}}>Навигация</Text>
      <Button color = "#403939" title="открыть" onPress={() => navigation.openDrawer()} />
      </View>
    </View>
  );
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Профиль Терапевта" component={About} />
       <Stack.Screen name="Профиль Миротворца" component={Prof} />
    </Stack.Navigator>
  );
}
function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <App2 />
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer independent={true}>


    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    > 
      <Drawer.Screen name="Главная страница" component={Feed} />
      <Drawer.Screen name = "Профили" component={MainStackNavigator}/>
      <Drawer.Screen name="Основная информация" component={Notifications} />
    </Drawer.Navigator>
      </NavigationContainer>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
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
    marginTop: 20,
    fontSize: 16,
  },
  
    phonetext: {
    margin: 22,
    fontWeight: 'bold',
    marginTop: -9,
    fontSize: 18,
  },
    separator: {
    borderBottomColor: 'black',
    marginRight:20,
    marginTop:5,
    backgroundColor:'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    text_cont: {
    margin: 22,

    marginTop: -2,
    fontSize: 18,
  },
    text_forcont: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 13,
    fontSize: 14,
  },
    text_phone2: {
    textAlign: 'center',
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {

    borderRadius: 200 / 4,
    height: 128,
    width: 128,
  },
    logo2: {

    borderRadius: 200 / 2,
    height: 100,
    width: 112,
  }
});