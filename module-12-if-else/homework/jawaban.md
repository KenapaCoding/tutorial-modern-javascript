
# Jawaban untuk Pertanyaan tentang If-Else di JavaScript

1. **Apa fungsi dari if-else statement di JavaScript?**  
   Jawaban: b) Membuat keputusan berdasarkan kondisi tertentu.

2. **Apa yang akan ditampilkan oleh kode berikut?**  
   Jawaban: b) You are not eligible to vote

3. **Bagaimana cara memeriksa beberapa kondisi secara berurutan menggunakan if-else?**  
   Jawaban: b) Menggunakan if-else if.

4. **Apa yang akan ditampilkan oleh kode berikut?**  
   Jawaban: c) Grade: C

5. **Apa yang dimaksud dengan nested if-else?**  
   Jawaban: b) Menggunakan if-else di dalam blok if-else lainnya.


## Jawaban Challenge 
```
    let num = 7;

    if (num > 0) {
        if (num % 2 === 0) {
            console.log('Angka ini positif dan genap');
        } else {
            console.log('Angka ini positif dan ganjil');
        }
    } else if (num < 0) {
        if (num % 2 === 0) {
            console.log('Angka ini negatif dan genap');
        } else {
            console.log('Angka ini negatif dan ganjil');
        }
    } else {
        console.log('Angka ini adalah nol');
    }

```