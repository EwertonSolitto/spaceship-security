import { StyleProp, ViewStyle } from "react-native"

type TCButton = {
  func: () => void,
  text: string,
  isDisabled?: boolean,
  buttonStyles?: StyleProp<ViewStyle>,
  textStyles?: StyleProp<ViewStyle>
}

export default TCButton