process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', (chunk) => {
    input = chunk.replace('\n', '');
});

function operateString(input) {
    let idx = 0;
    do {
        if(!input[idx] || !input[idx+1]) break;
        if(input[idx] === input[idx+1]) {
            input = input.replace(new RegExp(`${input[idx]}{2}`, 'ig'), '');
            idx = 0;
        } else {
            idx++;
            continue;
        }
    } while(input.length);
    return input || 'Empty String';
}
process.stdin.on('end', () => {
    // const regex = /(?<char>[a-z])\k<char>/;
    console.log(operateString(input));
});

module.exports = operateString;