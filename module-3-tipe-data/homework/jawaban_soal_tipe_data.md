
### File Jawaban dan Penjelasan: `jawaban_tipe_data.md`
```md
# Jawaban dan Penjelasan tentang Tipe Data di JavaScript

## 1. Tipe Data String
**Jawaban:** b) Tipe data untuk menyimpan teks  
**Penjelasan:** String adalah urutan karakter yang digunakan untuk menyimpan dan memanipulasi teks dalam JavaScript.

## 2. Tipe Data Number
**Jawaban:** c) 42.7  
**Penjelasan:** Number digunakan untuk menyimpan nilai numerik, baik bilangan bulat (integer) maupun desimal (float) dalam JavaScript.

## 3. Tipe Data Boolean
**Jawaban:** c) True dan False  
**Penjelasan:** Boolean hanya memiliki dua nilai: `true` atau `false`, yang sering digunakan dalam operasi logika dan kondisi.

## 4. Tipe Data Undefined
**Jawaban:** a) Nilai yang diberikan kepada variabel yang belum diinisialisasi  
**Penjelasan:** `undefined` adalah nilai default yang diberikan kepada variabel yang belum dideklarasikan atau belum diinisialisasi.

## 5. Tipe Data Null
**Jawaban:** a) `null` menunjukkan bahwa variabel tidak memiliki nilai, sedangkan `undefined` menunjukkan bahwa variabel belum diinisialisasi  
**Penjelasan:** `null` adalah nilai yang diberikan secara eksplisit untuk menunjukkan bahwa variabel tidak memiliki nilai, sedangkan `undefined` adalah nilai default ketika variabel belum diinisialisasi.

## 6. Tipe Data Symbol
**Jawaban:** b) Immutable dan unik  
**Penjelasan:** Symbol adalah tipe data primitif yang unik dan immutable, digunakan sebagai identifier unik untuk properti objek dalam JavaScript.

## 7. Tipe Data BigInt
**Jawaban:** c) Untuk merepresentasikan angka yang sangat besar melebihi batas `Number`  
**Penjelasan:** BigInt digunakan untuk menangani angka yang sangat besar yang tidak bisa diwakili oleh tipe data Number dalam JavaScript.

## 8. Tipe Data Object
**Jawaban:** a) Tipe data yang digunakan untuk menyimpan koleksi data dalam pasangan key-value  
**Penjelasan:** Object adalah tipe data reference yang digunakan untuk menyimpan data kompleks dalam bentuk pasangan key-value.

## 9. Tipe Data Array
**Jawaban:** b) Sebuah objek yang menyimpan data berurutan dan dapat diakses melalui indeks  
**Penjelasan:** Array adalah tipe data reference yang merupakan jenis khusus dari objek, digunakan untuk menyimpan koleksi data berurutan.

## 10. Tipe Data Function
**Jawaban:** a) Ya, Function adalah tipe data reference  
**Penjelasan:** Function dalam JavaScript adalah tipe data reference dan juga merupakan objek, yang memungkinkan blok kode untuk digunakan kembali.

## 11. Perbedaan Tipe Data Primitive vs Reference
**Jawaban:** b) Mengubah nilai pada tipe data reference akan mempengaruhi variabel lain yang merujuk ke objek yang sama  
**Penjelasan:** Pada tipe data reference, semua variabel yang merujuk ke objek yang sama akan dipengaruhi ketika objek tersebut diubah, berbeda dengan tipe data primitive yang tidak mempengaruhi variabel lain ketika nilainya diubah.

## 12. Contoh Kode Tipe Data Primitive
**Jawaban:** a) 10  
**Penjelasan:** Karena `b` menyimpan salinan nilai `a` sebelum `a` diubah, maka nilai `b` tetap 10 meskipun nilai `a` berubah menjadi 20.

## 13. Contoh Kode Tipe Data Reference
**Jawaban:** b) "budiman"  
**Penjelasan:** `obj2` merujuk ke objek yang sama dengan `obj1`, sehingga ketika `obj1.nama` diubah, nilai tersebut juga tercermin dalam `obj2`.
