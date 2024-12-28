
function squarePattern(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pattern += "* "
        }
        pattern += "\n"
    }
    return pattern
}


console.log(squarePattern(5));