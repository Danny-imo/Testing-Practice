const stringer = (string) => {
    if(string.length < 1 || string.length > 10 ) {
        throw Error('String Must be st least one char long  and Less Than 10 Chars')
    }else {
        return string.length
    }
}

// console.log(stringer(''))

module.exports = stringer
