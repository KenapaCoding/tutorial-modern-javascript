# Pertanyaan tentang Type Conversion di JavaScript

## 1. Apa yang dimaksud dengan Type Conversion dalam JavaScript?
- a) Proses mengubah satu tipe data menjadi tipe data lain
- b) Proses mengubah sebuah objek menjadi array
- c) Proses mengubah fungsi menjadi objek
- d) Proses mengubah tipe data menjadi konstanta

## 2. Apa perbedaan antara Implicit Conversion dan Explicit Conversion?
- a) Implicit Conversion dilakukan secara manual oleh programmer, sedangkan Explicit Conversion dilakukan secara otomatis oleh JavaScript
- b) Implicit Conversion dilakukan secara otomatis oleh JavaScript, sedangkan Explicit Conversion dilakukan secara eksplisit oleh programmer
- c) Tidak ada perbedaan antara keduanya
- d) Implicit Conversion dan Explicit Conversion adalah metode untuk mengubah tipe data menjadi objek

## 3. Apa hasil dari operasi berikut ini dalam Implicit Conversion?

```javascript
let result = "5" + 10;
console.log(result);
```

- a) 15
- b) "510"
- c) "5 + 10"
- d) Error

## 4. Apa hasil dari operasi berikut ini dalam Implicit Conversion?

```javascript
let result = "abc" - 10;
console.log(result, typeof result);
```
- a) NaN, "number"
- b) "abc10", "string"
- c) NaN, "string"
- d) Error

## 5. Apa yang terjadi ketika nilai 0, null, undefined, atau "" dikonversi menjadi Boolean secara Implicit?
- a) Semuanya akan menjadi true
- b) 0, null, undefined, dan "" akan menjadi false
- c) 0 dan null menjadi true, sementara undefined dan "" menjadi false
- d) Semuanya akan menjadi false kecuali undefined

## 6. Apa hasil dari konversi eksplisit berikut ini?

```javascript
let num = 100;
let string = num.toString();
console.log(string, typeof string);
```
- a) "100", "number"
- b) 100, "string"
- c) "100", "string"
- d) Error

## 7. Apa hasil dari konversi eksplisit berikut ini?
```javascript
let string2 = "200.88";
let num2 = parseFloat(string2);
console.log(num2, typeof num2);
```
- a) 200, "number"
- b) 200.88, "string"
- c) 200.88, "number"
- d) "200.88", "number"

## 8. Apa yang akan terjadi jika nilai kosong "" dikonversi menjadi Boolean secara eksplisit?
```javascript
let bool2 = Boolean("");
console.log(bool2, typeof bool2);
```
- a) true, "boolean"
- b) false, "boolean"
- c) true, "string"
- d) false, "string"