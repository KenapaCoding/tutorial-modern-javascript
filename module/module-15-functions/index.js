/* ​‌‍‌⁡⁢⁣⁢Function di Javascript⁡​ */

// ⁡⁣⁢⁢Function di JavaScript⁡ ⁡⁣⁣⁢adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali. Function mempermudah pengorganisasian kode dengan membagi tugas besar menjadi tugas-tugas kecil yang lebih terstruktur.⁡

// ⁡⁣⁢⁢Membuat Function,⁡ ⁡⁣⁣⁢untuk membuat function, gunakan kata kunci function diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dijalankan.⁡

/* 

    ⁡⁣⁢⁢function⁡ ⁡⁣⁣⁢namaFunction⁡(⁡⁣⁢⁣parameter1, parameter2, ...⁡) ⁡⁢⁣⁢{⁡
        ⁡⁢⁢⁢// Blok kode yang akan dijalankan⁡
    ⁡⁢⁣⁢}⁡

*/

function sapaPengguna(nama) {
    console.log("Halo, " + nama + "!");
  }

// ⁡⁣⁢⁢Memanggil Function,⁡ ⁡⁣⁣⁢Untuk menjalankan function, cukup panggil dengan menyebutkan nama function diikuti dengan tanda kurung, serta masukkan nilai untuk parameternya (jika ada).⁡

sapaPengguna("Budi"); // Output: Halo, Budi!


// ⁡⁣⁢⁢Parameter dan Argumen,⁡ ⁡⁣⁣⁢Parameter adalah variabel yang didefinisikan dalam deklarasi function. Argumen adalah nilai yang diberikan saat function dipanggil⁡

function tambah(a, b) {
    return a + b;
  }
  
  console.log(tambah(5, 3)); // Output: 8

// ⁡⁣⁣⁢Di sini, a dan b adalah parameter, sedangkan 5 dan 3 adalah argumen.⁡  

// ⁡⁣⁢⁢Return Statement,⁡ ⁡⁣⁣⁢Function dapat mengembalikan nilai menggunakan return. Setelah return dieksekusi, eksekusi function akan berhenti.⁡

function kuadrat(x) {
    return x * x;
  }
  console.log(kuadrat(4)); // Output: 16  