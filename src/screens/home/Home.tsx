import React, { useState } from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Clipboard from "expo-clipboard";

import styles from './HomeStyles';
import { StatusBar } from 'expo-status-bar';
import passwordGenerator from '../../scripts/passwordGenerator';

export default function Home() {
  const [password, setPassword] = useState('')

  function createPassword() {
    const newPassword = passwordGenerator(['numbers', 'capital letters', 'lowercase letters', 'special'], 8)

    setPassword(newPassword)
  }

  function copyPassword() {
    Clipboard.setStringAsync(password)
    Alert.alert("", "Password copied successfully!")
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='auto' />

      <Text style={styles.title}>Spaceship Security</Text>
      <Image source={require('../../../assets/spaceship.jpeg')} style={styles.img} />
      <Text style={styles.text}>Protect your Spaceship with the best password</Text>
      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={text => {setPassword(text)}}
      />

      <TouchableOpacity style={styles.button} onPress={createPassword}>
        <Text style={styles.buttonText}>🚀 Generate Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={copyPassword}>
        <Text style={styles.buttonText}>Copy</Text>
      </TouchableOpacity>

    </View>
  );
}