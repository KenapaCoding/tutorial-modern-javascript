/*
    var, dia bisa diakses diluar scopes, nilainya bisa diubah
*/

// if(true){
//     var nama = "ranggo"
// } //scope

// nama = "pato"
// console.log('var : ',nama)

/*
    let, dia tidak bisa di akses diluar scopes, hanya di dalam scopes, dan nilainya bisa diubah
*/

// if(true){
//     let nama = "ranggo"
//     nama = "pato"
//     console.log('let : ',nama)
// } //scope

/*
    const, dia tidak bisa di akses diluar scopes, hanya di dalam scopes, dan nilainya tidak bisa diubah
*/

if(true){
    const nama = "ranggo"
    nama = "pato"
    console.log('const : ',nama)
} //scope
