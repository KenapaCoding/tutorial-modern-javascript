// import greet, {add as tambah, subtract as kurang} from './math.js'


// console.log(tambah(10,20))
// console.log(kurang(10,5))

// greet("ranggo")

document.getElementById('addButton').addEventListener('click', async () => {
    const mathOperation = await import('./math.js')
    const result = mathOperation.add(5,3)
    console.log(result)
})

document.getElementById('subtractButton').addEventListener('click', async () => {
    const mathOperation = await import('./math.js')
    const result = mathOperation.subtract(5,3)
    console.log(result)
})