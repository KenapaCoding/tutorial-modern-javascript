# Jawaban dan Penjelasan tentang Variabel di JavaScript

## 1. Definisi Variabel
**Jawaban:** b) Wadah untuk menyimpan data yang dapat berubah sepanjang program berjalan  
**Penjelasan:** Variabel dalam JavaScript digunakan sebagai wadah untuk menyimpan data, yang nilainya bisa berubah seiring berjalannya program.

## 2. Penggunaan `var`
**Jawaban:** b) Bisa diakses di luar scope di mana ia dideklarasikan  
**Penjelasan:** Variabel yang dideklarasikan dengan `var` memiliki scope global atau function-scope, sehingga bisa diakses di luar blok seperti `if` atau `for`.

## 3. Perilaku `let`
**Jawaban:** b) Hanya bisa diakses di dalam scope di mana ia dideklarasikan  
**Penjelasan:** `let` memiliki block-scope, yang berarti variabel hanya bisa diakses di dalam blok (seperti `if`, `for`) tempat ia dideklarasikan.

## 4. Perbedaan `const` dan `let`
**Jawaban:** b) `const` nilainya tidak bisa diubah setelah dideklarasikan  
**Penjelasan:** `const` digunakan untuk mendeklarasikan variabel yang nilainya tidak akan berubah, berbeda dengan `let` yang memungkinkan nilai variabel berubah.

## 5. Kesalahan Umum `const`
**Jawaban:** b) Error akan muncul karena nilai `const` tidak bisa diubah  
**Penjelasan:** Jika Anda mencoba mengubah nilai variabel yang dideklarasikan dengan `const`, JavaScript akan mengeluarkan error karena `const` menetapkan nilai yang tidak bisa diubah.

## 6. Scope `var` vs `let`
**Jawaban:** b) `var` bisa diakses di mana saja setelah dideklarasikan, sementara `let` hanya bisa diakses di dalam scope-nya  
**Penjelasan:** `var` memiliki function-scope atau global-scope, sehingga bisa diakses di luar blok kode, sedangkan `let` memiliki block-scope yang membatasi akses hanya di dalam blok tersebut.
