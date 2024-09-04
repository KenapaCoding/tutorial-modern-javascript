/**
 * ​‌‍‌⁡⁢⁣⁢Object di JavaScript⁡​
 *
 * @format
 */

// ⁡⁣⁢⁢Pengertian Object,⁡ ⁡⁣⁣⁢Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡

// ⁡⁣⁣⁢Membuat Object⁡
// ⁡⁣⁣⁢1. Object Literal⁡
let mobil = {
    merk : 'Toyota',
    model: 'Avanza',
    tahun: 2014
}
// console.log(mobil)

// ⁡⁣⁣⁢2. Menggunakan Constructor new Object()⁡:
let buku = new Object()
buku.judul = 'Belajar JavaScript'
buku.penulis = 'Ranggo Pato'
// console.log(buku)


let mahasiswa = {
    nama: "Ranggo",
    umur: 21,
    "jurusan mahasiswa": 'Teknik Informatika'
}
// ⁡⁣⁣⁢Mengakses Properti Object⁡
// ⁡⁣⁣⁢1. Menggunakan Notasi Titik (Dot Notation):⁡
console.log(mahasiswa.nama)


// ⁡⁣⁣⁢2. Menggunakan Notasi Kurung (Bracket Notation):⁡
console.log(mahasiswa["jurusan mahasiswa"])



//⁡⁣⁣⁢ Menambah dan Mengubah Properti
//⁡⁣⁣⁢ 1. Menambah Properti:⁡
mahasiswa.alamat = 'Jakarta'
// console.log(mahasiswa)

// ⁡⁣⁣⁢2. Mengubah Properti:⁡
mahasiswa.nama = 'Budi'
// console.log(mahasiswa)


// ⁡⁣⁣⁢Menghapus Properti⁡
delete mahasiswa.alamat
// console.log(mahasiswa)

// ⁡⁣⁣⁢Nested Object⁡
let universitas ={
    "nama": "ITB",
    fakultas: {
        nama: 'Fakultas Teknik Industri',
        jurusan: 'Teknik Fisika'
    }
}
console.log(universitas)

// ⁡⁣⁣⁢Destructuring Object⁡
let {nama, umur} = mahasiswa
console.log(umur)