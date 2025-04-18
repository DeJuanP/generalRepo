//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
	let word = '';
  for (let i = 0; i < str.length; i++){
  	word = str[i] + str[i];
  };
  return word;
};

//Create a function that takes a list of non-negative integars and strings and returns a new list with the strings filtered out**

function filterList(arr){
    return arr.filter(item => typeof item === 'number')
}

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(word){
    word = word.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
      if (word[i]== word[i+1]) return false;
      }
    return true;
  }

  //Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

  function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''));
  }

  //Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
  //Use conditionals to return the proper message:

  function greet (name, owner) {
    
    if(name === owner){
      return 'Hello boss'
    }
    else{
      return 'Hello guest'
    }
  }

  //ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  //If the function is passed a valid PIN string, return true, else return false.

  function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {

  return  position + (roll * 2)
}








