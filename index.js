function Add(str) {
    if (str === "") {
        return 0
    } else if (str.length === 1) {
        return +str
    }


    const numberArray = str.split(',');
    
    // solution using reduce method
    // return numberArray.reduce((prevVal, currentVal) => (+prevVal) + (+currentVal), 0)

    let sum = 0;
    numberArray.forEach(number=>{
        sum += +number;
    })
    return sum;
}

module.exports = Add;