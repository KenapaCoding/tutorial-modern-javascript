/* ​‌‍‌⁡⁢⁣⁢Array di JavaScript⁡​ */

// ⁡⁣⁣⁢Apa Itu Array?⁡, ⁡⁣⁢⁢Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka atau string, dalam satu variabel. Di JavaScript, array dapat menyimpan berbagai tipe data sekaligus dan memiliki indeks yang dimulai dari 0⁡.

//⁡⁣⁣⁢ Membuat Array⁡

// 1. Menggunakan notasi array literal:

let fruits = ["Apple", "Banana", "Mango"];

// 2. Menggunakan new Array():

let num = new Array(1, 2, 3, 4, 5);

// ⁡⁣⁣⁢Mengakses Elemen Array⁡

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

//  Menambah atau Mengubah Elemen Array
fruits[3] = "Strawberry"; // Menambah elemen baru
fruits[0] = "Orange"; // Mengubah elemen yang ada

console.log(fruits); // ["Orange", "Banana", "Mango"]

// ⁡⁣⁣⁢Manipulasi Array⁡ 

let numbers = [1, 2, 3];

numbers.push(4); // Menambah elemen di akhir: [1, 2, 3, 4]
numbers.pop(); // Menghapus elemen terakhir: [1, 2, 3]
numbers.shift(); // Menghapus elemen pertama: [2, 3]
numbers.unshift(0); // Menambah elemen di awal: [0, 2, 3]

let newNumbers = numbers.concat([6, 7]); // Menggabungkan array: [1, 2, 3, 4, 5, 6, 7]
let slicedNumbers = numbers.slice(1, 3); // Mengambil elemen dari indeks 1 hingga 2: [2, 3]
numbers.splice(2, 1, 10); // Menghapus elemen di indeks 2 dan menggantinya dengan 10: [1, 2, 10, 4, 5]

console.log(numbers.indexOf(4)); // 3 (indeks elemen 4)
console.log(numbers.includes(10)); // true

// Multidimensional Array (Array of Arrays)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix[1][2]); 





