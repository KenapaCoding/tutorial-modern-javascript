/* ​‌‍‌⁡⁢⁣⁢Loop di JavaScript⁡​ */

// ⁡⁣⁢⁢Loop⁡ ⁡⁣⁣⁢digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. JavaScript mendukung beberapa jenis loop: for, while, dan do-while. Setiap jenis loop memiliki kegunaannya sendiri, tergantung pada kebutuhan.⁡


// ⁡⁣⁣⁢For Loop⁡

/* 
    ⁡⁣⁢⁢for⁡ ⁡⁣⁢⁣(inisialisasi; kondisi; perubahan)⁡ ⁡⁣⁣⁢{⁡
        // ⁡⁢⁢⁢kode yang dijalankan selama kondisi benar⁡
    ⁡⁣⁣⁢}⁡
*/
// for(let i =1; i <= 5; i++){
//     console.log(`Iterasi ke-${i}`)
// }


  

// ⁡⁣⁣⁢While Loop⁡

/*
    ⁡⁣⁢⁢while⁡ ⁡⁣⁢⁣(kondisi)⁡ ⁡⁣⁣⁢{⁡
        ⁡⁢⁢⁢// kode yang dijalankan selama kondisi benar⁡
    ⁡⁣⁣⁢}⁡
*/
// let y = 6
// while(y<=5){
//     console.log(`iterasi ke-${y} dengan while loop`)
//     y++
// }





// ⁡⁣⁣⁢Do-While Loop⁡
/* 
    ⁡⁣⁣⁢do⁡ ⁡⁣⁣⁢{⁡
       ⁡⁢⁢⁢ // kode yang dijalankan⁡
    ⁡⁣⁣⁢}⁡ ⁡⁣⁢⁣while (kondisi)⁡;
*/
// let z = 6;
// do{
//     console.log(`Iterasi ke ${z} dengan do-while`)
//     z++
// } while(z<=5)



// For-In Loop

// const object = {nama: "ranggo", umur: 26}

// for(let property in object){
//     console.log(property)
//     console.log(object[property])
// }



// For-Of Loop

let sum = 0
const array = [10,2,3,4,5]
for(let nilai of array){
    sum = sum + nilai
}
console.log(sum)


