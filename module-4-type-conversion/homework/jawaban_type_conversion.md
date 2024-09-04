# Jawaban dan Penjelasan tentang Type Conversion di JavaScript

## 1. Apa yang dimaksud dengan Type Conversion dalam JavaScript?
**Jawaban:** a) Proses mengubah satu tipe data menjadi tipe data lain  
**Penjelasan:** Type Conversion adalah proses mengubah satu tipe data menjadi tipe data lain, baik secara implicit maupun explicit.

## 2. Apa perbedaan antara Implicit Conversion dan Explicit Conversion?
**Jawaban:** b) Implicit Conversion dilakukan secara otomatis oleh JavaScript, sedangkan Explicit Conversion dilakukan secara eksplisit oleh programmer  
**Penjelasan:** Implicit Conversion terjadi secara otomatis selama operasi tertentu di JavaScript, sedangkan Explicit Conversion dilakukan dengan menggunakan metode atau fungsi tertentu.

## 3. Apa hasil dari operasi berikut ini dalam Implicit Conversion?
**Jawaban:** b) "510"  
**Penjelasan:** Dalam operasi ini, JavaScript melakukan konversi implicit dengan menggabungkan angka `10` dengan string `"5"`, menghasilkan string `"510"`.

## 4. Apa hasil dari operasi berikut ini dalam Implicit Conversion?
**Jawaban:** a) NaN, "number"  
**Penjelasan:** Karena pengurangan tidak dapat dilakukan antara string `"abc"` dan angka `10`, hasilnya adalah `NaN` (Not a Number) dengan tipe data `number`.

## 5. Apa yang terjadi ketika nilai `0`, `null`, `undefined`, atau `""` dikonversi menjadi Boolean secara Implicit?
**Jawaban:** b) `0`, `null`, `undefined`, dan `""` akan menjadi `false`  
**Penjelasan:** Nilai `0`, `null`, `undefined`, dan `""` dianggap sebagai "falsy" dalam JavaScript, sehingga mereka dikonversi menjadi `false` saat dilakukan konversi implicit ke Boolean.

## 6. Apa hasil dari konversi eksplisit berikut ini?
**Jawaban:** c) "100", "string"  
**Penjelasan:** Metode `toString()` mengubah angka `100` menjadi string `"100"` dengan tipe data `string`.

## 7. Apa hasil dari konversi eksplisit berikut ini?
**Jawaban:** c) 200.88, "number"  
**Penjelasan:** Fungsi `parseFloat()` mengubah string `"200.88"` menjadi angka desimal `200.88` dengan tipe data `number`.

## 8. Apa yang akan terjadi jika nilai kosong `""` dikonversi menjadi Boolean secara eksplisit?
**Jawaban:** b) false, "boolean"  
**Penjelasan:** Nilai kosong `""` dianggap sebagai "falsy" dalam JavaScript, sehingga ketika dikonversi secara eksplisit menjadi Boolean, hasilnya adalah `false` dengan tipe data `boolean`.
