import React from 'react';
import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

import { styles } from './CCheckboxStyles';

type TCChecxbox = {
  text: string,
  isChecked: boolean,
  handleCheckbox: React.Dispatch<React.SetStateAction<boolean>>
}

export function CCheckbox({ text, isChecked, handleCheckbox}: TCChecxbox) {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleCheckbox}
        color={isChecked ? '#03050B' : undefined}
      />
      <Text style={styles.checkboxText}>{text}</Text>
    </View>
  );
}