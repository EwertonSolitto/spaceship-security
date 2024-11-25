import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './HomeStyles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='auto' />


      <Text style={styles.title}>Spaceship Security</Text>
      <Image source={require('../../../assets/spaceship.jpeg')} style={styles.img} />
      <Text style={styles.text}>Protect your Spaceship with the best password</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🚀 Generate Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Copy</Text>
      </TouchableOpacity>
    </View>
  );
}