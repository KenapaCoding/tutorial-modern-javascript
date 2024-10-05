let num = 123


class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = "Custom Error"
    }
}

try {
    if (num === 123){
        throw new CustomError("Num tidak boleh bernilai 123")
    }
} catch (error) {
    console.error(`Error : ${error.name}`)
}