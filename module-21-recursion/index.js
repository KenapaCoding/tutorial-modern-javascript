/* ​‌‍‌⁡⁢⁣⁢Recursion di JavaScript⁡​ */

// ⁡⁣⁢⁢Recursion⁡ ⁡⁣⁣⁢terjadi ketika sebuah function memanggil dirinya sendiri secara langsung atau tidak langsung untuk menyelesaikan sebagian dari masalah yang diberikan. Setiap panggilan recursion membawa masalah tersebut lebih dekat ke kondisi dasar (base case), yaitu kondisi di mana recursion berhenti.⁡

/*
    ⁡⁣⁢⁣Struktur Recursion⁡
    ⁡⁣⁣⁢Recursion biasanya terdiri dari dua bagian penting:
        1. Base Case (Kondisi Dasar): Bagian dari function yang menghentikan recursion. Ini adalah kondisi di mana masalah tidak lagi memerlukan pemanggilan function secara rekursif.

        2. Recursive Case: Bagian dari function yang memecah masalah menjadi sub-masalah yang lebih kecil dan memanggil dirinya sendiri.⁡
*/

// ⁡⁣⁢⁢Contoh Recursion: Faktorial⁡
// ⁡⁣⁣⁢Faktorial dari sebuah bilangan adalah hasil kali dari bilangan tersebut dengan semua bilangan bulat positif di bawahnya. Faktorial dari n ditulis sebagai n!. Sebagai contoh, 5! (dibaca "5 faktorial") adalah 5 * 4 * 3 * 2 * 1, yang sama dengan 120.⁡

function faktorial(n){
    // Base Case 
    if (n === 0){
        return 1
    }
    // Recursive case
    console.log(n)
    return n * faktorial(n-1)
}
console.log(faktorial(5))


// ⁡⁣⁣⁢Gunakan recursion saat masalah dapat dipecah menjadi sub-masalah yang lebih kecil, ketika bekerja dengan struktur data seperti pohon, atau saat algoritma backtracking diperlukan. Namun, selalu pertimbangkan kinerja dan risiko stack overflow sebelum menggunakan recursion.⁡
  