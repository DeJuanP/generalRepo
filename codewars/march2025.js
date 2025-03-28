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
  