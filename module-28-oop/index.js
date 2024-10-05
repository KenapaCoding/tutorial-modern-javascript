/**
 * ​‌‍‌⁡⁢⁣⁢OOP di JavaScript⁡​
 *
 * @format
 */

// ⁡⁣⁢⁢Pemrograman Berbasis Objek (OOP)⁡ ⁡⁣⁣⁢adalah paradigma pemrograman yang berfokus pada penggunaan "objek" untuk mewakili data dan fungsionalitas dalam program. Konsep OOP memungkinkan Anda untuk memodelkan elemen-elemen dunia nyata dalam kode, membuatnya lebih mudah dipahami dan dikelola.⁡

// ⁡⁣⁢⁢Dasar-Dasar Objek di JavaScript⁡, ⁡⁣⁣⁢Objek adalah kumpulan pasangan kunci-nilai (key-value pairs) yang dapat mewakili data dan perilaku. Di JavaScript, objek bisa dibuat dengan cara yang sederhana.

let mobil = {
    merk : "Toyota",
    model : "Avanza",
    tahun : 2021,
    start: function(){
        console.log("Mobil dimulai")
    },
    info: function (){
        console.log(`Mobil : ${this.merk} ${this.model}`)
    }
}

// let mobil2 = {
//     merk : "Toyota",
//     model : "Avanza",
//     tahun : 2021,
//     start: function(){
//         console.log("Mobil dimulai")
//     },
//     info: function (){
//         console.log(`Mobil : ${this.merk} ${this.model}`)
//     }
// }

// mobil.start()

// Constructor Function
function Mobil(merk, model, tahun) {
	this.merk = merk;
	this.model = model;
	this.tahun = tahun;

	this.start = function () {
		console.log('Mobil dimulai');
	};
    this.info = function (){
        console.log(`Mobil : ${this.merk} ${this.model}`)
    }
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021)
let mobil2 = new Mobil("Honda", "Civic", 2020)

// console.log( mobil)
// console.log( mobil1)



// ⁡⁣⁢⁢Konsep Prototypal Inheritance⁡
//⁡⁣⁣⁢ JavaScript menggunakan prototypal inheritance, yang berarti objek dapat mewarisi properti dan method dari objek lain.⁡

// ⁡⁣⁣⁢Prototype adalah objek dari mana objek lain mewarisi properti dan method.⁡

function Hewan(nama, jenis){
    this.nama = nama
    this.jenis = jenis
}

Hewan.prototype.makan = function(){
    console.log(`${this.nama} makan`)
}

let kucing = new Hewan("Kitty", "Anggora")

kucing.makan()
