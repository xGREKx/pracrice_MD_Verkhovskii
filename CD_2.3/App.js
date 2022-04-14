import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView, StatusBar, Button, Alert  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);
export default function App() {
  return (
       <SafeAreaView style={styles.container}>
      
      <ScrollView style={styles.scrollView}
      
          vertical = {true}
          automaticallyAdjustContentInsets={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          onMomentumScrollEnd={this.onAnimationEnd}>
          
        <Text style={styles.text}>
          Information is associated with data. The difference is that information resolves uncertainty. Data can represent redundant symbols, but approaches information through optimal data compression.
        </Text>
      
      <View>
      <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={true}>
      <Text>For example, a single customer’s sale at a restaurant is data – this becomes information when the business is able to identify the most popular or least popular dish.</Text>
      </ScrollView>
      </View>
   
      </ScrollView>
       <View style={styles.viewst}>
      <ScrollView>
      <Text style={styles.viewstext}>Information is associated with data.</Text>
       <Separator/>
       <Button 
        title="Got it!"
        color="#fedd60"
        
        onPress={() => Alert.alert('Pressed!')}
      />
       <Separator />
       <Text style={{paddingTop:10, fontSize:39, fontWeight: 'bold', color: "black"}}>List Views</Text>
        <Text style={{paddingTop:5}}>The English word "information" comes from Middle French enformacion/informacion/information 'a criminal investigation' and its etymon, Latin informatiō(n) 'conception, teaching, creation'.</Text>
      </ScrollView>
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
    separator: {
    textColor: "black",
    borderBottomColor: '#ffffff',
    marginRight:20,
    marginTop:8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

    viewst: {
    flex: 10,
    colora:"red",
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20
  },    
    viewstext: {
        textAlign: 'left',
  },
  scrollView: {
    indicatorStyle: "black",
    minimumZoomScale:6,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    flex: 100,
    fontSize: 40,
  }
});