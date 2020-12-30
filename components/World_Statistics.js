import { useState } from 'react'
import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Link } from 'react-router';

// You can import from local files
import AssetExample from './AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function World_Statistics({navigation}) {
  let text = "Hello";

  return (
    <View style={styles.World_Statistics}>

      <View style={styles.navContainer}>
        <TouchableOpacity style = {styles.topButton} onPress = {() => navigation.navigate("Country_Statistics")}>
        <Text style = {styles.btntext}>Countires</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.topButton2} onPress = {() => navigation.navigate("Favourite_Countries")}>
        <Text style = {styles.btntext}>Favourites</Text>
        </TouchableOpacity>
      </View>
      
      <Text 
      style = {styles.header}>World Statistics</Text>


      <TextInput style={styles.textinput} 
        keyboardType = "numeric"
        //onChangeText={(text) => onChanged(text, 1)}
        placeholder="Original Price"
      underlineColorAndroid={'transparent'} />

      <TouchableOpacity style = {styles.button}
      >
        <Text style = {styles.btntext}>Calculate</Text>
      </TouchableOpacity>

      <Text style = {styles.infotext}>You Save : </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  World_Statistics: {
    alignItems: 'Middle',
    alignSelf: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
  },

  navContainer:{
    display: 'flex',
    flexDirection: 'row',
  },

  topButton:{
    width: 80,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#bf565f',
    marginTop: 30,
    marginBottom: 20,
    marginRight: 20,
  },

  topButton2:{
    width: 80,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d99484',
    marginTop: 30,
    marginBottom: 20,
    marginRight: 20,
  },

  btntext:{
    color: '#fff',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#d99484',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#d99484',
    borderBottomWidth: 1,
  },
  button:{
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#a64e65',
    marginTop: 30,
  },
  infotext: {
    fontSize: 15,
    paddingTop: 20,
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});
