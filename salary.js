process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    for (let s = 0; s < t; s++) {
      const n = Number(arr[s*2]);
      let nArray = arr[s*2+1].trim().split(' ').map(Number);
      const minIdx = nArray.indexOf(Math.min(...nArray));
      if (minIdx !== 0) {
        [nArray[minIdx], nArray[0]] = [nArray[0], nArray[minIdx]];
      }
      let diff = 0;
      let carry = 0;
      let res = 0;
      for (let idx = 0; idx < nArray.length - 1; idx++) {
          carry = diff + carry;
          diff = nArray[idx+1] - nArray[idx];
          res += carry + diff;
      }
      console.log(res);
    }
});