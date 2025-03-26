function unroll(squareArray) {
    let result = [];
    while (squareArray.length) {
        // Take the first row
        result = result.concat(squareArray.shift());

        // Take the last element of each remaining row
        for (let i = 0; i < squareArray.length; i++) {
            if (squareArray[i].length) {
                result.push(squareArray[i].pop());
            }
        }

        // Take the last row in reverse order (if any rows remain)
        if (squareArray.length) {
            result = result.concat(squareArray.pop().reverse());
        }

        // Take the first element of each remaining row in reverse order
        for (let i = squareArray.length - 1; i >= 0; i--) {
            if (squareArray[i].length) {
                result.push(squareArray[i].shift());
            }
        }
    }
    return result;
}

module.exports = unroll;
