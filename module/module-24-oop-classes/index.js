/*
  ​‌‍‌⁡⁢⁣⁢ES6 Classes: Cara Modern untuk OOP di JavaScript⁡​
*/

// ⁡⁣⁣⁢Dengan ES6, JavaScript memperkenalkan sintaks class yang lebih mudah dipahami dan digunakan.⁡

class Mobil {
	constructor(merk, model, tahun) {
		this.merk = merk;
		this.model = model;
		this.tahun = tahun;
	}

	start() {
		console.log(`${this.merk} dimulai`);
	}

	info() {
		console.log(`Mobil: ${this.merk} ${this.model}, Tahun: ${this.tahun}`);
	}
}

let mobil1 = new Mobil('Toyota', 'Avanza', 2021);
let mobil2 = new Mobil('Honda', 'Civic', 2020);

mobil1.start(); // Output: Toyota dimulai
mobil2.info(); // Output: Mobil: Honda Civic, Tahun: 2020

/*  
    ⁡⁣⁣⁢Class adalah blueprint untuk membuat objek.
    Constructor adalah method khusus untuk menginisialisasi objek baru. ⁡
*/
