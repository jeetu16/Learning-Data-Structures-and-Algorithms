function reverse1(str) {
    // check input 
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    let str2 = '';

    for(let i = str.length-1; i >= 0; i--) {
        str2 = str2+str[i];
    }
    return str2;
}

function reverse2(str) {
    // check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }

    const reversedStringArray = [];
    const totalCharacters = str.length-1;
    for(let i = totalCharacters; i >= 0; i--) {
        reversedStringArray.push(str[i]);
    }

    return reversedStringArray.join("");
    
}

function reverse3(str) {
    return str.split('').reverse().join('');
}

const reverse4 = str => str.split('').reverse().join('');
const reverse5 = str => [...str].reverse().join('');

console.log(reverse1("My Name is Jeetu"));
console.log(reverse2("My Name is Jeetu"));
console.log(reverse3("My Name is Jeetu"));
console.log(reverse4("My Name is Jeetu"));
console.log(reverse5("My Name is Jeetu"));
