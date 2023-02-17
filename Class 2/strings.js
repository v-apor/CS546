const constString = "I'm constant, I cannot be changed, I'm free as a bird!";
console.log(constString)

// Not Allowed
// constString = "changed"

let letString = "I'm let defined string, I can be changed"
console.log(letString)
letString = "I'm new value of letstring"
console.log(letString)

letString = letString.toUpperCase()
console.log(letString)

console.log(letString.indexOf('N'))
console.log(letString.charAt(4))

var varString = "I'm a var string"

let concatString = letString + " " + varString
console.log(concatString)

let otherWay = `${letString} ${varString}`
console.log(otherWay)

let strText = "My name is apoorv"
console.log(strText.split(' '))