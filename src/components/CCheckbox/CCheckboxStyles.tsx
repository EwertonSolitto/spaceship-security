import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  checkbox: {
    borderColor: colors.yellow,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: 500
  },
});