/* ​‌‍‌⁡⁢⁣⁢Higher-Order Functions dan Callback Functions⁡​ */

// ⁡⁣⁢⁢Higher-order functions⁡ ⁡⁣⁣⁢adalah function yang menerima function lain sebagai argumen atau mengembalikan function lain sebagai hasil.⁡

function manipulasiArray(arr, callback) {
    let hasil = [];
    for (let i = 0; i < arr.length; i++) {
      hasil.push(callback(arr[i]));
    }
    return hasil;
  }
  
  function kaliDua(x) {
    return x * 2;
  }
  
  let angka = [1, 2, 3, 4];
  let hasil = manipulasiArray(angka, kaliDua);
  
  console.log(hasil); // Output: [2, 4, 6, 8]

  
// ⁡⁣⁢⁢Callback function⁡ ⁡⁣⁣⁢adalah function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut.⁡

function selesaikanTugas(tugas, callback) {
    console.log("Menyelesaikan tugas: " + tugas);
    callback();
  }
  
  function tugasSelesai() {
    console.log("Tugas selesai!");
  }
  
  selesaikanTugas("Belajar JavaScript", tugasSelesai);
  