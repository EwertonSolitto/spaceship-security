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
    marginTop: 16,
    marginBottom: 32
  },
  text: {
    color: colors.white,
    fontSize: 16
  },
  input: {
    backgroundColor: colors.purple,
    width: 248,
    marginTop: 16,
    borderRadius: 10,
    height: 44,
    padding: 8
  },
  configButton: {},
  configButtonText: {
    fontSize: 16,
    color: colors.white,
    marginTop: 24,
    textDecorationLine: "underline"
  },
  menu: {
    display: "flex",
    position: "absolute",
    width: 312,
    backgroundColor: colors.white,
    borderWidth: 8,
    borderColor: colors.yellow,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    paddingInline: 16,
    paddingBottom: 24,
    paddingTop: 16
  },
  configTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginInline: "auto"
  },
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
  inputConfigMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  inputConfigTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginRight: 4
  },
  inputConfig: {
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: 16,
    borderRadius: 4,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  opened: {
    display: "flex"
  },
  closed: {
    display: "none"
  },
  closeButton: {
    marginInline: 'auto',
    backgroundColor: colors.black,
    paddingBlock: 8,
    width: 124,
    marginTop: 16,
    borderRadius: 12
  },
  closeText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center"
  }
});

export default styles