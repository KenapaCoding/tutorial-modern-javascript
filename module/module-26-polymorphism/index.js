/*
    ​‌‍‌⁡⁢⁣⁢Polymorphism⁡​
*/

// ⁡⁣⁢⁢Polymorphism ⁡⁣⁣⁡⁣⁣⁢memungkinkan Anda untuk menggunakan method dengan nama yang sama pada objek yang berbeda.⁡

class Hewan {
    bersuara() {
        console.log("Hewan bersuara.");
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log("Meong!");
    }
}

class Anjing extends Hewan {
    bersuara() {
        console.log("Guk Guk!");
    }
}

let hewan = new Hewan();
let kucing = new Kucing();
let anjing = new Anjing();

hewan.bersuara();  // Output: Hewan bersuara.
kucing.bersuara(); // Output: Meong!
anjing.bersuara(); // Output: Guk Guk!


// ⁡⁣⁣⁢Method bersuara() digunakan pada semua class, tetapi memberikan output yang berbeda sesuai dengan class-nya.⁡