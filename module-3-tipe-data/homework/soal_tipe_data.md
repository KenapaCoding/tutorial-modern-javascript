# Pertanyaan tentang Tipe Data di JavaScript

## 1. Tipe Data String
Apa yang dimaksud dengan tipe data `String` dalam JavaScript?  
- a) Tipe data untuk menyimpan angka  
- b) Tipe data untuk menyimpan teks  
- c) Tipe data untuk menyimpan nilai Boolean  
- d) Tipe data untuk menyimpan objek

## 2. Tipe Data Number
Mana yang merupakan contoh dari tipe data `Number` dalam JavaScript?  
- a) '12345'  
- b) true  
- c) 42.7  
- d) null

## 3. Tipe Data Boolean
Apa saja nilai yang dapat diambil oleh tipe data `Boolean` dalam JavaScript?  
- a) 0 dan 1  
- b) Ya dan Tidak  
- c) True dan False  
- d) Positif dan Negatif

## 4. Tipe Data Undefined
Apa yang dimaksud dengan nilai `undefined` dalam JavaScript?  
- a) Nilai yang diberikan kepada variabel yang belum diinisialisasi  
- b) Nilai yang diberikan kepada variabel yang diinisialisasi dengan angka nol  
- c) Nilai yang diberikan kepada variabel yang memiliki nilai string kosong  
- d) Nilai yang diberikan kepada variabel yang sudah diinisialisasi

## 5. Tipe Data Null
Apa perbedaan utama antara `null` dan `undefined` dalam JavaScript?  
- a) `null` menunjukkan bahwa variabel tidak memiliki nilai, sedangkan `undefined` menunjukkan bahwa variabel belum diinisialisasi  
- b) `undefined` menunjukkan bahwa variabel tidak memiliki nilai, sedangkan `null` menunjukkan bahwa variabel belum diinisialisasi  
- c) Tidak ada perbedaan antara `null` dan `undefined`  
- d) `null` digunakan untuk tipe data string, sedangkan `undefined` untuk tipe data number

## 6. Tipe Data Symbol
Apa karakteristik dari tipe data `Symbol` dalam JavaScript?  
- a) Mutable dan dapat digunakan kembali  
- b) Immutable dan unik  
- c) Mutable dan digunakan sebagai tipe data numerik  
- d) Immutable dan digunakan sebagai tipe data string

## 7. Tipe Data BigInt
Untuk apa tipe data `BigInt` digunakan dalam JavaScript?  
- a) Untuk merepresentasikan angka yang sangat kecil  
- b) Untuk merepresentasikan string yang sangat panjang  
- c) Untuk merepresentasikan angka yang sangat besar melebihi batas `Number`  
- d) Untuk merepresentasikan angka bulat dalam format string

## 8. Tipe Data Object
Apa yang dimaksud dengan tipe data `Object` dalam JavaScript?  
- a) Tipe data yang digunakan untuk menyimpan koleksi data dalam pasangan key-value  
- b) Tipe data yang digunakan untuk menyimpan teks  
- c) Tipe data yang digunakan untuk menyimpan angka bulat  
- d) Tipe data yang digunakan untuk menyimpan nilai Boolean

## 9. Tipe Data Array
Bagaimana cara mendefinisikan tipe data `Array` dalam JavaScript?  
- a) Sebuah objek yang menyimpan data berurutan dalam pasangan key-value  
- b) Sebuah objek yang menyimpan data berurutan dan dapat diakses melalui indeks  
- c) Sebuah objek yang menyimpan fungsi dan properti  
- d) Sebuah objek yang digunakan untuk menyimpan data dalam bentuk string

## 10. Tipe Data Function
Apakah `Function` termasuk tipe data di JavaScript?  
- a) Ya, Function adalah tipe data reference  
- b) Tidak, Function bukan tipe data  
- c) Ya, Function adalah tipe data primitive  
- d) Tidak, Function hanya merupakan perintah

## 11. Perbedaan Tipe Data Primitive vs Reference
Mana dari pernyataan berikut yang benar mengenai perbedaan antara tipe data primitive dan reference dalam JavaScript?  
- a) Tipe data primitive disimpan di heap memory, sedangkan reference disimpan di stack memory  
- b) Mengubah nilai pada tipe data reference akan mempengaruhi variabel lain yang merujuk ke objek yang sama  
- c) Tipe data reference disimpan di stack memory dengan nilai langsungnya  
- d) Mengubah nilai pada tipe data primitive akan mempengaruhi variabel lain yang menyimpan salinan nilai tersebut

## 12. Contoh Kode Tipe Data Primitive
Apa output dari kode di bawah ini?

```javascript
let a = 10;
let b = a;
a = 20;
console.log(b)
```
- a) 10
- b) 20
- c) undefined
- d) Error

## 13. Contoh Kode Tipe Data Reference

```javascript
let obj1 = {nama: "ranggo"};
let obj2 = obj1;
obj1.nama = "budiman";
console.log(obj2.nama);
```
- a) "ranggo"
- b) "budiman"
- c) undefined
- d) Error