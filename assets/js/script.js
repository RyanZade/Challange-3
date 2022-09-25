// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCaracter = ['+', '-', '&&', '||', '!', '(', ')', '{', '}', '[', ']', '^', ',', '~', '*', '?', ':'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Write password to the #password input
//Starter function
function generatePassword(){
    var length = window.prompt("Enter the length of your password");

    //this is an if statement to make sure the input is between 8 and 128 characters
    if(length < 8){
      window.prompt("Please enter a password greater than 8 characters")
      generatePassword()
    }else if(length > 128){
      window.prompt("Please enter a password less than 128 characters")
      generatePassword()
    }else{
      generateRandomPassword()
    }
    //function to generate password
  function generateRandomPassword(){
    let selectectOptionsArray =  [];          //initialising the variables and window.confirming them to get input from user
    var isNumeric = window.confirm("Do you want a Numeric Value");
    var isLower = window.confirm("Do you want a Lower Case");
    var isUpper = window.confirm("Do you want a Upper Case"); 
    var isSpecial = window.confirm("Do you want Special Characters"); 

    // if statements to add which each criteria into the select options array
    if(isNumeric){
      selectectOptionsArray = [...selectectOptionsArray, ...numericValues]
  }
  if(isLower){
    selectectOptionsArray = [...selectectOptionsArray, ...lowerCase]
  }
  if(isUpper){
    selectectOptionsArray = [...selectectOptionsArray, ...upperCase]
  }
  if(isSpecial){
    selectectOptionsArray = [...selectectOptionsArray, ...specialCaracter]
  }
  
// function to randomly select 
  function getRandom() {
    return Math.floor(Math.random() * selectectOptionsArray.length);
  }

  let password = '';
  //for loop to add all criteria selected characters into the password as a string
  for(let i=0; i < length; i++){
    console.log(selectectOptionsArray[getRandom()]);
    let randomCharacter = selectectOptionsArray[getRandom()]
    password = password +  randomCharacter
    console.log(password);
  }
  document.querySelector("#password").value = password
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);