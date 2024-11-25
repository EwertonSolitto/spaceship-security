import React from 'react';
import {Image, Text, TextInput, View } from 'react-native';

import styles from './HomeStyles';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/button/Button'

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='auto' />


      <Text style={styles.title}>Spaceship Security</Text>
      <Image source={require('../../../assets/spaceship.jpeg')} style={styles.img} />
      <Text style={styles.text}>Protect your Spaceship with the best password</Text>
      <TextInput style={styles.input} />

      <Button>🚀 Generate Password</Button>
      <Button>Copy</Button>
      
    </View>
  );
}