
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

function accessElementInArray(array , index) {
  
  return array[index] ; 
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.shift() ;
  
  return array ;
}


function removeElementFromBeginningOfArray(array) {
  
  return array = array.slice(1) ; 
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop() ; 
 return array ; 
  
}

function removeElementFromEndOfArray(array) {
  
  array = array.slice(0,array.length -1 ) ;
  return array ; 
  
}

