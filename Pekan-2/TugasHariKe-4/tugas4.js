/*
 Soal 1
*/ 
const fullName = "William Imoh"

const william = {fullName}
console.log(william) 

/*
  Soal 2
  destructuring
*/ 

const newObject = {
 firstName: "Harry",
 lastName: "Potter Holt",
 destination: "Hogwarts React Conf",
 occupation: "Deve-wizard Avocado",
 spell: "Vimulus Renderus!!!"
}
// Melakukan destructuring
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName)
console.log(lastName)
console.log(destination)
console.log(occupation)
console.log(spell)

/*
 Soal 3
*/ 
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

// Melakukan penggabungan array dengan Spread operator
let combineArray = [...west, ...east]
console.log(combineArray)