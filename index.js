// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

//DESTRUCTIVE FUNCTIONS//

function destructivelyAppendDriver(name) {
  drivers.push(name);
}


//destructivelyAppendDriver ('Ralph'); we don't need to use it because the test file will call it//

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

//remove last driver//

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

//remove first driver//

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

//NON-DESTRUCTIVE FUNCTIONS//

//within the function, you need to declare a new constant, with a different name to that of your function// 

function appendDriver(name) {

const newArray = [...drivers,name];

return newArray

}


function prependDriver(name) {

const newArrayPrepend = [name,...drivers];

return newArrayPrepend

}

//you cannot return drivers because they you won't be inline with the rule that drivers need to stay the same, so you can create a copy//

function removeLastDriver(name) {

const driversCopy = drivers.slice()

driversCopy.pop(name);

return driversCopy

}


//remove firstDriver//that constant is only available inside this function which is why you can use return driversCopy again//

function removeFirstDriver(name) {
  
const driversCopy = drivers.slice(1)

return driversCopy

}
