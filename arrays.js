
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'] 

function addElementToBeginningOfArray(array ,element) {
 var arrayNew = [element,...array] ; 
 return arrayNew ; 
} 

function destructivelyAddElementToBeginningOfArray(array ,element) {
  array.unshift(element) ;
  return array ;
}  

function addElementToEndOfArray(array , element) {
var arrayNew = [...array , element] ; 
 return arrayNew ; 
  
}

function destructivelyAddElementToEndOfArray(array , element) {
  array.push(element) ;
  return array ; 
  
}

// Accessing An Element Exercises 

function accessElementInArray() {
  
}


function destructivelyRemoveElementFromBeginningOfArray() {
  
}


