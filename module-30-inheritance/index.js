class Hewan {
    constructor(nama,jenis){
        this.nama = nama
        this.jenis = jenis
    }

    makan(){
        return `${this.nama} sedang makan`
    }
}

class Kucing extends Hewan {
    constructor(nama,jenis, warna){
        super(nama, jenis)
        this.warna = warna
    }
    kucingMakan(){
        console.log(super.makan())
        console.log('makannya lahap sekali')
    }
}

let Kitty = new Kucing("Kitty","kucing", "orange")

console.log(Kitty.jenis)

// console.log(Kitty.makan())
console.log(Kitty.kucingMakan())
