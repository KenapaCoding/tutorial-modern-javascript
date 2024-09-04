
# Jawaban dan Penjelasan untuk Pertanyaan Multiple Choice tentang DOM di JavaScript

## 1. Apa kepanjangan dari DOM?
- **Jawaban:** B) Document Object Model
- **Penjelasan:** DOM adalah singkatan dari Document Object Model, yaitu representasi berbasis objek dari struktur dokumen HTML atau XML.

## 2. Bagaimana cara mengakses elemen dengan id "header" dalam DOM menggunakan JavaScript?
- **Jawaban:** A) `document.getElementById("header")`
- **Penjelasan:** `document.getElementById` digunakan untuk mengakses elemen dengan ID tertentu dalam DOM.

## 3. Metode mana yang digunakan untuk mengubah teks dalam elemen DOM?
- **Jawaban:** C) `element.textContent`
- **Penjelasan:** `textContent` digunakan untuk mengubah teks yang ada di dalam suatu elemen.

## 4. Bagaimana cara menambahkan elemen baru ke dalam DOM?
- **Jawaban:** A) `document.createElement()`
- **Penjelasan:** `createElement()` digunakan untuk membuat elemen baru, yang kemudian dapat ditambahkan ke DOM menggunakan `appendChild()`.

## 5. Metode mana yang digunakan untuk menghapus elemen dari DOM?
- **Jawaban:** A) `element.removeChild()`
- **Penjelasan:** `removeChild()` digunakan untuk menghapus elemen anak dari elemen induknya dalam DOM.

## 6. Apa yang dilakukan oleh metode `document.querySelectorAll()`?
- **Jawaban:** B) Mengembalikan semua elemen yang cocok dengan selector
- **Penjelasan:** `querySelectorAll()` mengembalikan NodeList dari semua elemen yang cocok dengan selector yang diberikan.

## 7. Bagaimana cara mengubah atribut pada elemen dalam DOM?
- **Jawaban:** A) `element.setAttribute(name, value)`
- **Penjelasan:** `setAttribute()` digunakan untuk mengubah nilai atribut dari elemen tertentu.

## 8. Apa yang dilakukan oleh properti `element.classList`?
- **Jawaban:** B) Menambah atau menghapus kelas CSS pada elemen
- **Penjelasan:** `classList` adalah properti yang menyediakan cara untuk menambah, menghapus, atau memanipulasi kelas CSS pada elemen.

## 9. Bagaimana cara menambahkan event listener untuk event klik pada elemen?
- **Jawaban:** A) `element.addEventListener("click", function)`
- **Penjelasan:** `addEventListener()` adalah metode yang digunakan untuk menambahkan event listener pada elemen.

## 10. Metode mana yang digunakan untuk mengakses elemen induk dari elemen tertentu?
- **Jawaban:** A) `element.parentNode`
- **Penjelasan:** `parentNode` mengembalikan elemen induk dari elemen tertentu.

## 11. Bagaimana cara mengakses semua anak dari elemen tertentu?
- **Jawaban:** B) `element.childNodes`
- **Penjelasan:** `childNodes` mengembalikan NodeList dari semua anak elemen (termasuk teks dan komentar).

## 12. Apa yang terjadi jika Anda menggunakan `element.innerHTML` untuk menambahkan teks?
- **Jawaban:** B) Semua elemen anak akan dihapus
- **Penjelasan:** `innerHTML` menimpa konten HTML dari elemen, sehingga semua elemen anak akan dihapus dan diganti dengan yang baru.

## 13. Bagaimana cara menghapus semua elemen anak dari elemen tertentu?
- **Jawaban:** A) `element.innerHTML = ""`
- **Penjelasan:** Mengosongkan `innerHTML` dari elemen akan menghapus semua elemen anaknya.

## 14. Apa yang dilakukan oleh `event.preventDefault()` dalam event handling?
- **Jawaban:** A) Mencegah default browser dari menangani event
- **Penjelasan:** `preventDefault()` digunakan untuk mencegah tindakan default browser pada event tertentu.

## 15. Bagaimana cara menghentikan propagasi event ke elemen induk?
- **Jawaban:** A) `event.stopPropagation()`
- **Penjelasan:** `stopPropagation()` menghentikan event dari propagasi lebih lanjut ke elemen induk.

## 16. Metode mana yang digunakan untuk memindahkan elemen dalam DOM?
- **Jawaban:** A) `element.append()`
- **Penjelasan:** `append()` digunakan untuk menambahkan elemen sebagai anak terakhir dari elemen induknya.

## 17. Bagaimana cara memilih elemen berdasarkan nama kelasnya?
- **Jawaban:** A) `document.getElementsByClassName("className")`
- **Penjelasan:** `getElementsByClassName()` mengembalikan semua elemen yang memiliki kelas tertentu.

## 18. Apa fungsi dari `element.nextSibling`?
- **Jawaban:** A) Mengembalikan elemen saudara setelah elemen saat ini
- **Penjelasan:** `nextSibling` mengembalikan node saudara berikutnya dari elemen saat ini, termasuk node teks.

## 19. Bagaimana cara mengakses elemen dengan nama tag "p" menggunakan JavaScript?
- **Jawaban:** A) `document.getElementsByTagName("p")`
- **Penjelasan:** `getElementsByTagName()` mengembalikan semua elemen dengan nama tag tertentu.

## 20. Apa yang dilakukan oleh `element.firstChild`?
- **Jawaban:** A) Mengembalikan elemen anak pertama
- **Penjelasan:** `firstChild` mengembalikan node anak pertama dari elemen tertentu.
