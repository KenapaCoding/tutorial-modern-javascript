
# Jawaban tentang Strings di JavaScript

## 1. Apa itu String dalam JavaScript?
**Jawaban:** b) Tipe data untuk merepresentasikan teks.

## 2. Bagaimana cara mengakses karakter pada String?
**Jawaban:** b) Menggunakan tanda kurung siku [].

## 3. Apa fungsi dari property `length` pada String?
**Jawaban:** c) Mengetahui panjang dari String.

## 4. Apa hasil dari kode berikut?
```javascript
let text = 'JavaScript';
console.log(text.toUpperCase());
```
**Jawaban:** c) 'JAVASCRIPT'

## 5. Apa fungsi dari metode `trim()` pada String?
**Jawaban:** c) Menghapus spasi di awal dan akhir String.

## 6. Manakah yang benar tentang `slice()` pada String?
**Jawaban:** b) Mengambil bagian dari String berdasarkan indeks.

## 7. Apa hasil dari kode berikut?
```javascript
let sentence = "Hello, World";
let newSentence = sentence.replace('World', 'JavaScript');
console.log(newSentence);
```
**Jawaban:** a) 'Hello, JavaScript'

## 8. Apa kegunaan dari `includes()` pada String?
**Jawaban:** b) Mengecek apakah String mengandung substring tertentu.

## 9. Tuliskan kode untuk menggabungkan dua string 'Hello' dan 'JavaScript' menggunakan template literals.
```javascript
let greet = 'Hello';
let language = 'JavaScript';
let result = `${greet} ${language}`;
console.log(result); // Output: 'Hello JavaScript'
```

## 10. Tuliskan kode yang membagi string 'test-array-di-string' menjadi array berdasarkan '-' sebagai separator.
```javascript
let str = 'test-array-di-string';
let arr = str.split('-');
console.log(arr); // Output: ['test', 'array', 'di', 'string']
```
