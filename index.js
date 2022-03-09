function Add(str) {
    let delimiter = null;
    if (str === "") {
        return 0
    } else if (str.length === 1) {
        return +str
    } else if (str.substr(0, 2) === "//") {
        // incase delimiter is provided
        delimiter = str.substring(2, str.indexOf("\n"));
    }

    // (str.substr(str.indexOf("\n") + 1).split(delimiter)) -> remove only the input part of string (after '\n') and split with given delimiter(if provided)
    const numberArray = (delimiter !== null) ? (str.substr(str.indexOf("\n") + 1).split(delimiter)) : str.split('\n').join(',').split(',');



    // solution using reduce method
    // return numberArray.reduce((prevVal, currentVal) => (+prevVal) + (+currentVal), 0)

    let sum = 0;
    numberArray.forEach(number => {
        sum += +number;
    })
    return sum;
}

module.exports = Add;