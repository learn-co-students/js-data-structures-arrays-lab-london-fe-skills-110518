// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop(2);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(0);
}

function appendDriver(name) {
  let copyOfDrivers = drivers.slice();
  copyOfDrivers.push(name)
  return copyOfDrivers;
}

function prependDriver(name) {
    let copyOfDrivers = drivers.slice();
    copyOfDrivers.unshift(name)
    return copyOfDrivers;
}

function removeLastDriver(name) {
    let copyOfDrivers = drivers.slice();
    copyOfDrivers.pop(name)
    return copyOfDrivers;
}


function removeFirstDriver(name) {
    let copyOfDrivers = drivers.slice();
    copyOfDrivers.shift(name)
    return copyOfDrivers;
}