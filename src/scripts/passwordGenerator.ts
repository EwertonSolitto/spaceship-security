import TCharacters from "../types/TCharacters"

export default function passwordGenerator(optionsSelected: TCharacters[], length: number) {
  const numbers = "0123456789"
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const special = `/[!@#$%¨&*()-+=_,.<>;:~^'"[]{}|`

  const characters = ""

  if (optionsSelected.length === 4) {
    characters.concat(numbers, capitalLetters, lowercaseLetters, special)
  } else {
    optionsSelected.forEach((option) => {
      if (option === "numbers") {
        characters.concat(numbers)
      } else if (option === "capital letters") {
        characters.concat(capitalLetters)
      } else if (option === "lowercase letters") {
        characters.concat(lowercaseLetters)
      } else if (option === "special") characters.concat(special)
    })
  }

  const password = ""

  for(let i = 0; i < length; i++) {
    password.concat(characters[Math.floor(Math.random() * characters.length + 1)])
  }

  return password
}