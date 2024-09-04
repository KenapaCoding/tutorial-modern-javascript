
# Pertanyaan: Switch-Case di JavaScript

## 1. Apa yang terjadi jika pernyataan `break` tidak digunakan dalam sebuah `case` di dalam switch-case?
- A) Program akan menghentikan eksekusi seluruh switch-case.
- B) Program akan melanjutkan ke case berikutnya hingga menemukan break atau akhir dari switch-case.
- C) Program akan mengulang case saat ini.
- D) Program akan langsung melompat ke blok default.

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
- A) Senin
- B) Selasa
- C) Rabu
- D) Hari tidak valid

## 3. Kapan kita lebih baik menggunakan switch-case daripada if-else?
- A) Ketika hanya ada dua kemungkinan nilai yang diperiksa.
- B) Ketika ada banyak kemungkinan nilai yang harus diperiksa.
- C) Ketika kondisi yang diperiksa kompleks.
- D) Ketika kita perlu melakukan operasi aritmatika.
