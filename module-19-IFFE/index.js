/* ​‌‍‌⁡⁢⁣⁢IIFE (Immediately Invoked Function Expression)⁡​ */

// ⁡⁣⁢⁢IIFE⁡ ⁡⁣⁣⁢adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk mengisolasi variabel dan mencegahnya mengganggu kode lain.⁡


(function(){
    console.log("IIFE dipanggil")
})()

const appConfig = (function(){
    const apiKey = '1234'
    const apiURL = 'https://api.example.com'

    return {
        getApiKey: function(){
            return apiKey
        },
        getApiURL: function(){
            return apiURL
        }
    }
})()

console.log(appConfig.getApiKey())
console.log(appConfig.getApiURL())
