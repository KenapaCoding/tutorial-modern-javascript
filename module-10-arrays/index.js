/* ​‌‍‌⁡⁢⁣⁢Array di JavaScript⁡​ */

// ⁡⁣⁣⁢Apa Itu Array?⁡, ⁡⁣⁢⁢Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka atau string, dalam satu variabel. Di JavaScript, array dapat menyimpan berbagai tipe data sekaligus dan memiliki indeks yang dimulai dari 0⁡.

//⁡⁣⁣⁢ Membuat Array⁡

// 1. Menggunakan notasi array literal:
    let fruits = ["apple", "banana", "mango"]
    // console.log(fruits)

// 2. Menggunakan new Array():

    let num = new Array(1,2,3,4,5)
    // console.log(num)



// ⁡⁣⁣⁢Mengakses Elemen Array⁡
    // console.log(fruits[0])
    // console.log(fruits[2])



//  Menambah atau Mengubah Elemen Array
    fruits[3] = "Strawberry"
    fruits[0] = "Orange"
    // console.log(fruits)




// ⁡⁣⁣⁢Manipulasi Array⁡ 

    let numbers = [1,2,3]
    // numbers.push(4)
    // numbers.pop() 
    // numbers.shift()
    // numbers.unshift(5)
    // console.log(numbers)

    let numbers2 = [4,5]
    let newNumber = numbers.concat(numbers2)
    console.log(newNumber)
    newNumber.splice(2,1,10)
    console.log(newNumber)
    console.log(newNumber.indexOf(10))
    console.log(newNumber.includes(5))
    // console.log(newNumber.slice(2,4))






// Multidimensional Array (Array of Arrays)
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[1][2])







