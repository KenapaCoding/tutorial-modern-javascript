/* ​‌‍‌⁡⁢⁣⁢Scope dan Hoisting⁡​ */

/*
    ⁡⁣⁢⁢Scope⁡ ⁡⁣⁣⁢mengacu pada aksesibilitas variabel dan fungsi dalam berbagai bagian kode Anda. JavaScript memiliki dua jenis scope utama:⁡
        ⁡⁣⁣⁢1. Global Scope
        2. Local Scope⁡

*/

// ⁡⁣⁢⁢Global Scope⁡, ⁡⁣⁣⁢Variabel yang dideklarasikan di luar fungsi atau block apa pun memiliki global scope. Variabel ini dapat diakses dari mana saja dalam kode Anda, baik di dalam fungsi maupun di luar fungsi.⁡

let globalVar = "Saya global";

function contohGlobal() {
    console.log(globalVar); // Akses variabel global
}

contohGlobal(); // Output: Saya global
console.log(globalVar); // Output: Saya global


//⁡⁣⁢⁢ Local Scope⁡, ⁡⁣⁣⁢Variabel yang dideklarasikan di dalam fungsi atau block hanya dapat diakses di dalam fungsi atau block tersebut. Variabel ini memiliki local scope.⁡

/* 
    ⁡⁣⁢⁢Ada dua jenis local scope dalam JavaScript:⁡
        ⁡⁣⁣⁢1. Function Scope: Variabel yang dideklarasikan dengan var, let, atau const di dalam fungsi.
        2. Block Scope: Variabel yang dideklarasikan dengan let atau const di dalam block ({}).⁡
*/

// ⁡⁣⁣⁢Function Scope⁡
function contohLocal() {
    let localVar = "Saya lokal";
    console.log(localVar); // Output: Saya lokal
}

contohLocal();
console.log(localVar); // Error: localVar is not defined

// ⁡⁣⁣⁢Block Scope⁡
if (true) {
    let blockVar = "Saya block-scoped";
    console.log(blockVar); // Output: Saya block-scoped
}

console.log(blockVar); // Error: blockVar is not defined

// ⁡⁣⁢⁢Hoisting⁡ ⁡⁣⁣⁢adalah mekanisme di mana deklarasi variabel dan fungsi "diangkat" (hoisted) ke bagian atas scope-nya sebelum kode dieksekusi. Ini berarti Anda dapat menggunakan variabel dan fungsi sebelum dideklarasikan dalam kode, meskipun nilai variabel tidak diangkat.⁡

// ⁡⁣⁢⁢Hoisting pada Variabel⁡, ⁡⁣⁣⁢JavaScript hanya mengangkat deklarasi variabel, bukan inisialisasinya. Jadi, variabel yang diakses sebelum dideklarasikan akan menghasilkan undefined jika menggunakan var, dan error jika menggunakan let atau const.⁡

// ⁡⁣⁣⁢Contoh Hoisting dengan var:⁡
console.log(hoistedVar); // Output: undefined
var hoistedVar = "Saya terhoist";
console.log(hoistedVar); // Output: Saya terhoist


// ⁡⁣⁣⁢Contoh dengan let dan const:⁡
console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Saya tidak terhoist";

console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "Saya tidak terhoist";


// ⁡⁣⁢⁢Hoisting pada Fungsi⁡⁡, ⁡⁣⁣⁢Fungsi yang dideklarasikan dengan cara function declaration akan diangkat sepenuhnya (baik deklarasi maupun definisi), sehingga dapat dipanggil sebelum dideklarasikan.⁡

console.log(fungsiTerhoist()); // Output: Saya fungsi yang terhoist

function fungsiTerhoist() {
    return "Saya fungsi yang terhoist";
}

// ⁡⁣⁣⁢Namun, jika menggunakan function expression (termasuk dengan let, const, atau var), hanya variabel yang diangkat, bukan fungsinya.⁡

// ⁡⁣⁣⁢Contoh Hoisting pada Function Expression:⁡

console.log(fungsiTidakTerhoist); // Output: undefined
var fungsiTidakTerhoist = function() {
    return "Saya fungsi yang tidak terhoist";
};

console.log(fungsiTidakTerhoist()); // Output: Saya fungsi yang tidak terhoist


