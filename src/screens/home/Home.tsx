import React, { useEffect, useState } from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Clipboard from "expo-clipboard";
import Checkbox from 'expo-checkbox';

import styles from './HomeStyles';
import { StatusBar } from 'expo-status-bar';
import passwordGenerator from '../../scripts/passwordGenerator';
import TCharacters from '../../types/TCharacters';

export default function Home() {
  const [password, setPassword] = useState('')
  const [openedMenu, setOpenedMenu] = useState(false)
  const [isNumberChecked, setIsNumberChecked] = useState(true)
  const [isCapitalLetterChecked, setIsCapitalLetterChecked] = useState(true)
  const [isLowercaseLetterChecked, setIsLowercaseLetter] = useState(true)
  const [isSpecialChecked, setIsSpecialChecked] = useState(true)
  const [passwordLength, setPasswordLength] = useState('8')

  useEffect(() => {
    if(passwordLength <= '0') {
      setPasswordLength('1')
    }
    
    if(isNumberChecked === false && isCapitalLetterChecked === false && isCapitalLetterChecked === false && isSpecialChecked === false) {
      Alert.alert("", "Leave at least one checkbox checked")
    }
  })

  function createPassword() {
    setOpenedMenu(false)
    const optionsSelected: TCharacters[] = []

    if(isNumberChecked) optionsSelected.push('numbers')
    if(isCapitalLetterChecked) optionsSelected.push('capital letters')
    if(isLowercaseLetterChecked) optionsSelected.push('lowercase letters')
    if(isSpecialChecked) optionsSelected.push('special')

    if(optionsSelected.length) {
      const newPassword = passwordGenerator(optionsSelected, Number(passwordLength))
      setPassword(newPassword)
    }
  }

  function copyPassword() {
    setOpenedMenu(false)
    
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
      <TouchableOpacity style={styles.button} onPress={copyPassword} disabled={password ? false : true}>
        <Text style={styles.buttonText}>Copy</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOpenedMenu(true)}>
        <Text style={styles.configButton}>Config</Text>
      </TouchableOpacity>

      <View style={[styles.menu, openedMenu ? styles.opened : styles.closed]}>
        <Text style={styles.configTitle}>Config</Text>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isNumberChecked}
            onValueChange={setIsNumberChecked}
            color={isNumberChecked ? '#03050B' : undefined}
          />
          <Text style={styles.checkboxText}>Numbers</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isCapitalLetterChecked}
            onValueChange={setIsCapitalLetterChecked}
            color={isCapitalLetterChecked ? '#03050B' : undefined}
          />
          <Text style={styles.checkboxText}>Capital Letters</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isLowercaseLetterChecked}
            onValueChange={setIsLowercaseLetter}
            color={isLowercaseLetterChecked ? '#03050B' : undefined}
          />
          <Text style={styles.checkboxText}>Lowercase Letters</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isSpecialChecked}
            onValueChange={setIsSpecialChecked}
            color={isSpecialChecked ? '#03050B' : undefined}
          />
          <Text style={styles.checkboxText}>Special (!@#$%...)</Text>
        </View>
        <View style={styles.inputConfigMenu}>
          <Text style={styles.inputConfigTitle}>Number of Characters:</Text>
          <TextInput
            style={styles.inputConfig}
            keyboardType='number-pad'
            onChangeText={text => setPasswordLength(text)}
            value={passwordLength}
            maxLength={3}
          />
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={() => setOpenedMenu(false)}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}