/*
    ​‌‍‌⁡⁢⁣⁢Encapsulation⁡​
*/

// ⁡⁣⁢⁢Encapsulation⁡ ⁡⁣⁣⁢adalah konsep untuk membatasi akses ke properti dan method dari objek. JavaScript mengimplementasikan ini dengan penggunaan simbol underscore _ atau menggunakan closures.⁡

class BankAccount{
    #balance
    constructor(owner, balance){
        this.owner = owner
        this.#balance = balance
    }

    deposit(amount){
        this.#balance = this.#balance + amount
    }

    getBalance(){
        console.log(`Saldo : ${this.#balance}`)
    }
}

let akunRanggo = new BankAccount("Ranggo", 1000)
akunRanggo.#balance = 12000
console.log(akunRanggo.#balance)


// ⁡⁣⁣⁢Penggunaan _balance mengindikasikan bahwa properti ini "pribadi", meskipun masih bisa diakses (JavaScript tidak mendukung encapsulation private secara ketat di ES6).private fields #⁡ ES2022