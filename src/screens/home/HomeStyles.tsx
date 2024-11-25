import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black
  },
  title: {
    color: colors.white,
    fontSize: 28,
  },
  img: {
    width: 248,
    height: 248,
    borderRadius: 248,
    marginBlock: 16
  },
  text: {
    color: colors.white,
    fontSize: 16
  },
  input: {
    backgroundColor: colors.purple,
    width: 248,
    marginTop: 8,
    borderRadius: 10
  },
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

export default styles