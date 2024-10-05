// function selesaikanTugas(tugas, callback){
//     console.log(`Menyelesaikan Tugas : ${tugas}`)
//     callback()
// }

// function tugasSelesai(){
//     console.log("Tugas telah selesai !")
// }

// selesaikanTugas("Informatika", tugasSelesai)

function getUserData(callback){
    console.log("Fetching user data . . .")

    setTimeout(()=> {
        const userData = {
            id: 1,
            name: 'Ranggo',
            email: 'ranggo@hotmail.com'
        }
        
        callback(null,userData)
    }, 2000)
}

function displayUserData(error, userData){
    if(error){
        console.error("Error fetching user data: ", error)
    } else {
        console.log("user Data : ", userData)
    }
}

getUserData(displayUserData)