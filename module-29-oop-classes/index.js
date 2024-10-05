/*
  ​‌‍‌⁡⁢⁣⁢ES6 Classes: Cara Modern untuk membuat constructor function OOP di JavaScript⁡​
*/

// ⁡⁣⁣⁢Dengan ES6, JavaScript memperkenalkan sintaks class yang lebih mudah dipahami dan digunakan.⁡

// function Mobil(merk, model, tahun) {
// 	this.merk = merk;
// 	this.model = model;
// 	this.tahun = tahun;

// 	this.start = function () {
// 		console.log('Mobil dimulai');
// 	};
//     this.info = function (){
//         console.log(`Mobil : ${this.merk} ${this.model}`)
//     }
// }

class Mobil {
	constructor(merk, model, tahun){
		this.merk = merk;
		this.model = model;
		this.tahun = tahun;
	}
	start(){
		console.log('Mobil dimulai');
	}
	info(){
		console.log(`Mobil : ${this.merk} ${this.model}`)
	}
}



let mobil1 = new Mobil('Toyota', 'Avanza', 2021);
let mobil2 = new Mobil('Honda', 'Civic', 2020);

mobil1.start()
mobil2.info()

/*  
    ⁡⁣⁣⁢Class adalah blueprint untuk membuat objek.
    Constructor adalah method khusus untuk menginisialisasi objek baru. ⁡
*/
