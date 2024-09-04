
# Pertanyaan: Date Object di JavaScript

## 1. Apa yang akan ditampilkan oleh kode berikut?
```javascript
let now = new Date();
console.log(now.getFullYear());
```
- A. Tahun saat ini
- B. Bulan saat ini
- C. Hari saat ini
- D. Waktu saat ini

## 2. Apa hasil dari kode berikut?
```javascript
let specificDate = new Date("August 20, 2024 10:30:00");
console.log(specificDate.getMonth());
```
- A. `7`
- B. `8`
- C. `6`
- D. `9`

## 3. Bagaimana cara membuat objek Date untuk tanggal 25 Desember 2025?
- A. `new Date(2025, 12, 25)`
- B. `new Date(2025, 11, 25)`
- C. `new Date(2025, 12, 24)`
- D. `new Date(2025, 10, 25)`

## 4. Apa output dari kode berikut?
```javascript
let date = new Date(2024, 7, 20, 10, 30);
console.log(date.getDate());
```
- A. `19`
- B. `20`
- C. `21`
- D. `22`

## 5. Apa yang akan ditampilkan oleh kode berikut?
```javascript
let today = new Date();
console.log(today.getDay());
```
- A. Menampilkan hari dalam bentuk teks (misal: "Senin")
- B. Menampilkan hari dalam bentuk angka (0-6)
- C. Menampilkan tanggal dalam bentuk angka (1-31)
- D. Menampilkan bulan dalam bentuk angka (0-11)

## 6. Apa fungsi dari `setFullYear()` dalam JavaScript?
- A. Mengatur tahun pada objek Date
- B. Mengatur bulan pada objek Date
- C. Mengatur tanggal pada objek Date
- D. Mengatur waktu pada objek Date

## 7. Apa output dari kode berikut?
```javascript
let startDate = new Date(2024, 7, 20, 10, 30);
let endDate = new Date(2024, 8, 3, 10, 30);
let diff = endDate - startDate;
console.log(diff / (1000 * 3600 * 24));
```
- A. `12.5`
- B. `13`
- C. `14`
- D. `15`

## 8. Apa yang akan ditampilkan oleh kode berikut?
```javascript
let date = new Date();
date.setDate(29);
console.log(date.getDate());
```
- A. `28`
- B. `29`
- C. `30`
- D. `31`
