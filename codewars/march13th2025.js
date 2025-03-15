//Create a function that takes a list of non-negative integars and strings and returns a new list with the strings filtered out

function filterList(arr){
    return arr.filter(item => typeof item === 'number')
}