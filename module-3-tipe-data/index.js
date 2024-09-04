/* Tipe data Primitive */

// String
const nama = 'Ranggo'
const negara = "Indonesia"
const domisili = `${nama} Bandung`

// Number
const umur = 26.5

// Boolean
const isMarried = true

// Undefined
let x;

// null
const person = null

// Symbol
const symbol1 = Symbol("description 1")

// BigInt
const bigInt1 = 27864816487632487263476n


/* Tipe data Reference */

// Object 
const orang = {
    nama: "Ranggo",
    umur: 26,
    negara: "indonesia",
}

// Array 
const hobby = ["Basket", "Catur"]


// Function 
function sayHello(){
    return "Hello from kenapa coding"
}

const output = sayHello

console.log(output, typeof output)

// https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Javascript/Tricky-JS-Problems/typeof-null-why-its-object.md

/* Perbedaan tipe data primitive dan reference */

// tipe data primitive

let a = 10
let b = a // 'b' menyimpan nilai salinan dari a , b = 10

a = 20

console.log(b) // output : 10

// tipe data reference

let obj1 = {nama: "ranggo"}
let obj2 = obj1 //obj2 akan menyimpan referensi yang sama dengan obj1
obj1.nama = "budiman" 

console.log(obj2)
