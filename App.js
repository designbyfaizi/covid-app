import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import {useState, useEffect} from 'react';


import { Link } from 'react-router';

import World_Statistics from './components/World_Statistics.js';
import Country_Statistics from './components/Country_Statistics.js';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#734d69'
  },
};

//const allCountries = 'https://covid19-api.com/country/all?format=json';
const allCountries = 'https://reactnative.dev/movies.json';


const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(allCountries).then((response) => response.json()).then((json) => setData(json.movies)).catch((error) => alert(error)).finally(setLoading(false));});
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (<ActivityIndicator />): (
          <FlatList 
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => {
                <Text style = {styles.header}>{item.title}
                {item.releaseYear}</Text>
            }}
          
      />)}
      <NavigationContainer theme = {MyTheme}>
        <Stack.Navigator >
          <Stack.Screen name = "Discount" component = {World_Statistics} options={{headerShown: false}} />
          <Stack.Screen name = "Country_Statistics" component = {Country_Statistics} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#734d69',
  },
});


export default App;