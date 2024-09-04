/**
 * ​‌‍‌ ⁡⁢⁣⁢Switch-Case di JavaScript​⁡
 *
 * @format
 */

// ⁡⁣⁢⁢Switch-case⁡ ⁡⁣⁣⁢adalah pernyataan kondisional di JavaScript yang digunakan untuk membandingkan sebuah ekspresi dengan beberapa kemungkinan nilai dan mengeksekusi blok kode tertentu berdasarkan kecocokan nilai tersebut. Switch-case sering digunakan sebagai alternatif dari beberapa pernyataan if-else yang berturut-turut ketika kita ingin mengevaluasi sebuah variabel terhadap banyak kemungkinan nilai.⁡

/*
    ⁡⁣⁢⁢switch⁡ ⁡⁣⁢⁣(ekspresi)⁡ ⁡⁣⁢⁣{⁡
        ⁡⁣⁢⁢case⁡ ⁡⁢⁣⁢nilai1⁡:
            ⁡⁢⁢⁢// Kode yang dijalankan jika ekspresi === nilai1⁡
            ⁡⁣⁢⁢break;⁡
        ⁡⁣⁢⁢case⁡ ⁡⁢⁣⁢nilai2⁡:
            ⁡⁢⁢⁢// Kode yang dijalankan jika ekspresi === nilai2⁡
          ⁡⁣⁢⁢  break;⁡
        ⁡⁣⁣⁢// Tambahkan lebih banyak case sesuai kebutuhan⁡
      ⁡⁣⁢⁢  ⁡⁢⁣⁢default⁡:⁡⁡
            ⁡⁢⁢⁢// Kode yang dijalankan jika tidak ada case yang cocok⁡
    ⁡⁣⁢⁣}⁡
*/

const hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

console.log(namaHari);  // Output: "Rabu"


// ⁡⁣⁢⁢Eksekusi Tanpa Break:⁡ ⁡⁣⁣⁢Jika kamu tidak menempatkan break setelah setiap case, maka semua case di bawahnya akan dijalankan (fall-through) hingga menemukan break atau akhir dari switch-case.⁡

const warna = "merah";

switch (warna) {
    case "merah":
        console.log("Warna adalah merah");
    case "biru":
        console.log("Warna adalah biru");
    case "kuning":
        console.log("Warna adalah kuning");
    default:
        console.log("Warna tidak dikenali");
}

// Output:
// "Warna adalah merah"
// "Warna adalah biru"
// "Warna adalah kuning"
// "Warna tidak dikenali"

