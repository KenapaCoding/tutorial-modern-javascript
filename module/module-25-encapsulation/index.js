/*
    ​‌‍‌⁡⁢⁣⁢Encapsulation⁡​
*/

// ⁡⁣⁢⁢Encapsulation⁡ ⁡⁣⁣⁢adalah konsep untuk membatasi akses ke properti dan method dari objek. JavaScript mengimplementasikan ini dengan penggunaan simbol underscore _ atau menggunakan closures.⁡

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposit: ${amount}`);
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Saldo tidak mencukupi.");
        } else {
            this._balance -= amount;
            console.log(`Withdraw: ${amount}`);
        }
    }

    getBalance() {
        console.log(`Saldo: ${this._balance}`);
    }
}

let akun = new BankAccount("John Doe", 1000);
akun.deposit(500);  // Output: Deposit: 500
akun.withdraw(200); // Output: Withdraw: 200
akun.getBalance();  // Output: Saldo: 1300


// ⁡⁣⁣⁢Penggunaan _balance mengindikasikan bahwa properti ini "pribadi", meskipun masih bisa diakses (JavaScript tidak mendukung encapsulation private secara ketat di ES6).⁡