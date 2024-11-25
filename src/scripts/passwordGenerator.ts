import TCharacters from "../types/TCharacters"

export default function passwordGenerator(optionsSelected: TCharacters[], length: number) {
  const numbers = "0123456789"
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const special = `/[!@#$%¨&*()-+=_,.<>;:~^'"[]{}|`

  let characters = ""

  if (optionsSelected.length === 4) {
    characters += numbers.concat(capitalLetters, lowercaseLetters, special)
  } else {
    optionsSelected.forEach((option) => {
      if (option === "numbers") {
        characters += numbers
      } else if (option === "capital letters") {
        characters += capitalLetters
      } else if (option === "lowercase letters") {
        characters += lowercaseLetters
      } else if (option === "special") characters += special
    })
  }

  let password = ""

  for(let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }

  return password
}