import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './CButtonStyles';
import TCButton from '../../types/TCButton';

export function CButton({ func, text, isDisabled, buttonStyles, textStyles }: TCButton) {
  return (
    <TouchableOpacity style={buttonStyles ? buttonStyles : styles.button} onPress={func} disabled={isDisabled}>
      <Text style={textStyles ? textStyles : styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
