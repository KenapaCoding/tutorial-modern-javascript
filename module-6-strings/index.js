/* ​‌‍‌⁡⁢⁣⁢Strings di javascript⁡​ */

// ⁡⁣⁣⁢membuat strings⁡
// let singleQuote = 'Hello'
// let doubleQuote = "World"
// let backtics = `Hello World`

// // mengakses karakter di dalam string
// let str = 'JavaScript'
// console.log(str[4])

// // property dan methods di dalam string

// console.log(str.length) // mengetahui panjang string

// console.log(str.toUpperCase()) // merubah string ke uppercase

// console.log(str.toLowerCase()) // merubah string ke lowecase

// let testTrim = '       javascript       trim     '

// console.log(testTrim.trim())

// Manipulasi String 

// concat 
// let firstName = 'Ranggo'
// let lastName = 'Pato'
// let result = firstName + " " + lastName
// console.log(result)

// // concat template literals

// let resultBactics = `${firstName} ${lastName}`
// console.log(resultBactics)

// // Mengambil bagian dari string 

// let text = "JavaScript"
// console.log(text.slice(0,4))
// console.log(text.substring(4))

// // Mengganti bagian dari string
// let replacement = 'Hello, World'
// let newReplacement = replacement.replace('World', 'There')

// console.log(newReplacement)

// const arr = ['test', 'array', 'di', 'string']

// // console.log(arr.join('-'))

// const testString = 'test-array-di-string'

// console.log(testString.split('-', 4))

// Pencarian di dalam string

//indexOf, 
let sentence = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolorum veniam, laborum ut ipsa et accusamus consectetur corrupti necessitatibus omnis?"
let index = sentence.indexOf("dolor")
console.log(index)
let lastIndex = sentence.lastIndexOf("dolor")
console.log(lastIndex)

let exists = sentence.includes("dolorisme")
console.log(exists)