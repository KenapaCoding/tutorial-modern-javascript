
# Jawaban: Switch-Case di JavaScript

## 1. Apa yang terjadi jika pernyataan `break` tidak digunakan dalam sebuah `case` di dalam switch-case?
**Jawaban: B) Program akan melanjutkan ke case berikutnya hingga menemukan break atau akhir dari switch-case.**

## 2. Apa hasil dari kode berikut ini?
```javascript
const hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = 'Senin';
  case 2:
    namaHari = 'Selasa';
  case 3:
    namaHari = 'Rabu';
    break;
  case 4:
    namaHari = 'Kamis';
  default:
    namaHari = 'Hari tidak valid';
}
console.log(namaHari);
```
**Jawaban: C) Rabu**

## 3. Kapan kita lebih baik menggunakan switch-case daripada if-else?
**Jawaban: B) Ketika ada banyak kemungkinan nilai yang harus diperiksa.**
