/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */


// ⁡⁣⁣⁢Apa itu Date Object,⁡ ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// Tanggal dan waktu saat ini
let now = new Date();

// Menggunakan string
let specificDate = new Date("August 20, 2024 10:30:00");

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 7, 20, 10, 30); // Bulan ke-8 (Agustus, karena bulan dimulai dari 0)

// ⁡⁣⁣⁢Mengambil Informasi Tanggal dan Waktu⁡

let today = new Date();

console.log(today.getFullYear()); // 2024
console.log(today.getMonth()); // 7 (Agustus)
console.log(today.getDate()); // 20
console.log(today.getDay()); // 2 (Selasa)
console.log(today.getHours()); // Jam saat ini
console.log(today.getMinutes()); // Menit saat ini
console.log(today.getSeconds()); // Detik saat ini
console.log(today.getMilliseconds()); // Milidetik saat ini
console.log(today.getTime()); // Waktu dalam milidetik sejak 1 Januari 1970

// ⁡⁣⁣⁢Mengatur Tanggal dan Waktu⁡

let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);

// Mengatur bulan menjadi Desember (11, karena bulan dimulai dari 0)
date.setMonth(11);

// Mengatur hari menjadi 25
date.setDate(25);

console.log(date); // Output: Thu Dec 25 2025 ...

// ⁡⁣⁣⁢Perhitungan Waktu dengan Date Object⁡

let startDate = new Date("August 1, 2024");
let endDate = new Date("August 20, 2024");

let differenceInTime = endDate - startDate;
let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Mengonversi milidetik ke hari

console.log(differenceInDays); // 19 hari



