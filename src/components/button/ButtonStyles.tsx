import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.yellow,
    width: 248,  
    height: 32,
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center"
  }
});