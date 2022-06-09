const transpose = function (matrix) {
    // Put your solution here
    var result = [];
    for (var row = 0; row < matrix.length; ++row) {
        for (var col = 0; col < matrix[row].length; ++col) {
            if (result[col] === undefined) {
              result[col] = [];
            } 
            result[col][row] = matrix[row][col];
        }
    }
    return result;
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const fliped = transpose(letters);
    const verticalJoin = fliped.map(ls => ls.join(''));
    if (letters.length < 1) {
        return false;
    }
    let reverse = word.split('').reverse().join('');
    //console.log(reverse);

    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverse)) return true
    }

    for (c of verticalJoin) {
        if (c.includes(word) || c.includes(reverse)) return true
    }

    return false;
}



module.exports = wordSearch;