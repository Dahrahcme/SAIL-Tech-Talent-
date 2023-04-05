let number = 45;
const arr = Array()

console.log(arr);

const list = ["lion", "rabbit", "sheep", "pig", "giraffe"]

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);

console.log (list.length)

console.log (list)

let js = "javaScript"

const jsSplitting = js.split('')

console.log(jsSplitting)

const learn = "REACT"
let x = learn.split("")

console.log(x)

const arr2 = Array(3).fill("Samuel")

console.log(arr2)

const y = Array(6).fill("rat")

console.log(y)

// concatenation

const firstArr = [1,2,3,4]
const secondArr = [5,6,7,8]

const thirdArr = [firstArr,secondArr]

console.log(thirdArr)

console.log(firstArr.concat(secondArr))

// indexOf

const animal = ["lion", "rabbit", "sheep", "pig", "giraffe"]
let position = animal.indexOf("goat")
console.log(position)

let position1 = animal.indexOf("sheep")
console.log(position1)

let position2 = animal.indexOf("crayfish")
console.log(position2)

// lastIndexOf
const livestock = ["sheep", "lion", "rabbit", "sheep", "pig", "giraffe", "sheep"]
let stock = livestock.lastIndexOf("goat")
console.log(stock)

let firststock = livestock.indexOf("sheep")
console.log(firststock)

let stock1 = livestock.lastIndexOf("sheep")
console.log(stock1)

// includes
let stockinclude = livestock.includes("sheep")
console.log(stockinclude)

// isArray
console.log(typeof livestock)
console.log(Array.isArray(livestock))

const num = 4
console.log(Array.isArray(num))

// toString
const numberList = [5, 4, 7, 3, 9]
numList = numberList.toString()

console.log(numList)
console.log(typeof numList)

// ClassWork
const itCompany = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompany)
console.log(itCompany.length)
console.log(itCompany[0])
console.log(itCompany[6])
// console.log(itCompany.lastIndexOf()) 