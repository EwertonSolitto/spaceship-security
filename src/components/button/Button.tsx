import React from 'react';
import { styles } from './ButtonStyles';
import { Text, TouchableOpacity } from 'react-native';

export function Button({children}: {children: string}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
  );
}