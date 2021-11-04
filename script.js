// Assignment Code
//special chars array
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordOption() {
  let passwordLength = parseInt(prompt('How long would you like your password to be?'))
  
  if (isNaN(passwordLength)){
    alert('We can only accept a number!')
    return
  }
  if (passwordLength < 8) {
    alert('Password length must be greater than 8 characters!')
    return
  }

  if (passwordLength > 128) {
    alert('Password length must be less than 128 characters!')
    return
  }

  let specials = confirm('Would you like to add special characters?')
  let lowers = confirm('Would you like to add lowers?')
  let uppers = confirm('Would you like to add uppers?')
  let numeric = confirm('Would you like to add numeric?')
  if (!specials && !lowers && !uppers && !numeric) {
    alert('Select atleast one set of characters!')
    return
  }
  let options = {
    numeric, uppers, lowers, specials, passwordLength
  }
  
  console.log('options: ', options)
return options
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent=password
}

function generatePassword() {
  let options=passwordOption()
  let bigArray=[]
  let replace=[]
  let finalPassword=[]
  if (options.numeric) {
    bigArray=bigArray.concat(numericChars)
  replace.push(pickRandom(numericChars))
  }
  if (options.specials) {
    bigArray=bigArray.concat(specialChars)
  replace.push(pickRandom(specialChars))
  }
  if (options.uppers) {
    bigArray=bigArray.concat(upperCasedChars)
  replace.push(pickRandom(upperCasedChars))
  }
  if (options.lowers) {
    bigArray=bigArray.concat(lowerCasedChars)
  replace.push(pickRandom(lowerCasedChars))
  }

for (let i = 0; i < options.passwordLength; i++) {
  finalPassword.push(pickRandom(bigArray));
  }

for (let i = 0; i < replace.length; i++) {
  finalPassword[i]=replace[i];
  }
console.log('bigArray',bigArray)
console.log('final',finalPassword)
console.log('replace',replace)
return finalPassword.join('')
}

function pickRandom(arr){
  let randomIndex = Math.floor(Math.random()* arr.length)
  return arr[randomIndex]
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
