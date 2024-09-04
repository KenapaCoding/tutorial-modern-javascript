/**
 * ​‌‍‌⁡⁢⁣⁢Object di JavaScript⁡​
 *
 * @format
 */

// ⁡⁣⁢⁢Pengertian Object,⁡ ⁡⁣⁣⁢Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡

// ⁡⁣⁣⁢Membuat Object⁡
// ⁡⁣⁣⁢1. Object Literal⁡
let mobil = {
	merk: 'Toyota',
	model: 'Avanza',
	tahun: 2021,
};

// ⁡⁣⁣⁢2. Menggunakan Constructor new Object()⁡:
let buku = new Object();
buku.judul = "Belajar JavaScript";
buku.penulis = "John Doe";
buku.tahun = 2023;

// ⁡⁣⁣⁢Mengakses Properti Object⁡

let mahasiswa = {
    nama: "Budi",
    umur: 21,
    jurusan: "Teknik Informatika"
  };

// ⁡⁣⁣⁢1. Menggunakan Notasi Titik (Dot Notation):⁡
console.log(mahasiswa.nama); // Output: Budi

// ⁡⁣⁣⁢2. Menggunakan Notasi Kurung (Bracket Notation):⁡
console.log(mahasiswa["jurusan"]); // Output: Teknik Informatika
 
//⁡⁣⁣⁢ Menambah dan Mengubah Properti
//⁡⁣⁣⁢ 1. Menambah Properti:⁡
mahasiswa.alamat = "Jakarta";

// ⁡⁣⁣⁢2. Mengubah Properti:⁡
mahasiswa.umur = 22;

// ⁡⁣⁣⁢Menghapus Properti⁡
delete mahasiswa.alamat;
console.log(mahasiswa.alamat); // Output: undefined


// ⁡⁣⁣⁢Nested Object⁡
let universitas = {
    nama: "Universitas ABC",
    fakultas: {
      nama: "Fakultas Teknik",
      jurusan: "Teknik Informatika"
    }
  };
  
  console.log(universitas.fakultas.nama); // Output: Fakultas Teknik
  


// ⁡⁣⁣⁢Destructuring Object⁡
let { nama, umur } = mahasiswa;
console.log(nama); // Output: Budi
console.log(umur); // Output: 22
