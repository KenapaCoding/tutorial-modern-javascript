// let number = 124

// try {
//     if(number == 123){
//         throw new Error("Nomor 123 tidak diperbolehkan")
//     }
//     console.log(number)
// } catch (error) {
//     // console.log(error)
//     console.error(`Error Terjadi : ${error.message}`)
// } finally {
//     console.log("ini akan selalu dijalankan")
// }

// throw 

function divide(a,b){
    if(b===0){
        throw new Error("Pembagian dengan nol tidak diperbolehkan")
    }
    return a/b
}

try {
    let result = divide(10,2)
    console.log(result)
} catch (err) {
    console.error(`Error : ${err.message}`)
}

