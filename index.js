// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}



function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  
  drivers.pop(name)
  
}

function destructivelyRemoveFirstDriver(name) {
  
  drivers.shift(name)
  
  
  
}


function appendDriver(name) {
  
  let driverscopy = drivers.slice()
  
  drivers.slice()
  
  driverscopy.push(name)
  
  return driverscopy
  
}

function prependDriver(name) {
  
  let driverscopy = drivers.slice()
  
  driverscopy.unshift()
  
}
