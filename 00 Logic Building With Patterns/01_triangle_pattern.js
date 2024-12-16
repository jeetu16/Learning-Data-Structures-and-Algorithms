function trianglePattern1(num) {
    let pattern = ""
    
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += `${j} `
        }
        pattern += '\n';
    }
    return pattern;
}
// Output :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function trianglePattern2(num) {
    let pattern = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += `${i} `
        }
        pattern += '\n';
    }
    return pattern
}
// Output :
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


function trianglePattern3(num) {
    let pattern = "";
    let intVar = 1;

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += `${intVar} `
            intVar++;
        }
        pattern += '\n';
    }
    return pattern
}
// Output :
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function reverseTrianglePattern1(input) {
    let pattern = ""
    for (let i = input; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += `${j} `;
        }
        pattern += "\n";
    }
    
    return pattern;
}
// Output :
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function numberPyramidPattern1(input) {
    let pattern = '';

    for (let i = 1; i <= input; i++) {
        for (let k = input-i; k >= 0; k--) {
            pattern += "  ";
        }
        for (let j = 1; j <= 2*i-1 ; j++) {
            pattern += `${j} `; 
        }
        pattern += '\n';
    }

    return pattern
}

// Output :
//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9

function numberPyramidPattern2(input) {
    let pattern = '';
    let variable = 1;

    for (let i = 1; i <= input; i++) {
        for (let k = input-i; k >= 0; k--) {
            pattern += "  ";
        }
        for (let j = 1; j <= 2*i-1 ; j++) {
            pattern += `${variable} `;
            variable++;
        }
        pattern += '\n';
    }

    return pattern
}

// Output :
//     1
//   2 3 4
// 5 6 7 8 9

console.log(trianglePattern1(5));
console.log(trianglePattern2(5));
console.log(trianglePattern3(5));
console.log(reverseTrianglePattern1(5));
console.log(numberPyramidPattern1(5));
console.log(numberPyramidPattern2(3));
