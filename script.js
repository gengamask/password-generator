// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // things that will be raondomly included in the password
  const num ="0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%^&*(_+=-~][}{;/.,?><";
  let actualPassword = "";
  let passwordHolder = "";

  var enterPassword = prompt("How long would you like your password to be? Enter a value betwen 8 to 128");
  if(enterPassword > 128 || enterPassword < 8){
    window.alert("Enter a number between 8 to 128.")
    return;
  }

  window.alert("Your password can include numbers, uppercase, lowercase, and special characters.");

  const yesNum = window.confirm("Include number in your password?");
  const yeslowerCase = window.confirm("Include lowercase in your password?");
  const yesupperCase = window.confirm("Include uppercase in your password?");
  const yesspecialCharacters = window.confirm("Include special characters in your password?");



  // could be better with array in the future
  if(yesNum){
    passwordHolder += num;
  }
  if(yeslowerCase){
    passwordHolder += lowerCase;
  }
  if(yesupperCase){
    passwordHolder += upperCase;
  }
  if(yesspecialCharacters){
    passwordHolder += specialCharacters;
  }
   
  for(var i = 0; i < enterPassword; i++){
    actualPassword += passwordHolder.charAt(Math.floor(Math.random() * passwordHolder.length))
  }
//     actualPassword += characterInclude.charAt(Math.floor(Math.random() * characterInclude.length));

  return actualPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);