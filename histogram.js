const { log } = require('./utils')
const printHistogram = (arr, bucketSize) => {
    const n = arr.length;
    const map = new Map();
    let maxKey = 0;
    for(let i=0;i<n;i++) {
        key = Math.floor((arr[i]-1)/bucketSize);
        if(!map.has(key)) {
            map.set(key, 1);
        }
        else {
            map.set(key, map.get(key)+1);
        }
        maxKey = Math.max(maxKey, key)
    }

    for(let i = 0;i<=maxKey;i++) {
        const start = bucketSize*i+1;
        const end = (i+1)*bucketSize;
        const val = map.get(i) ? map.get(i) : 0;

        log(`${start} to ${end}: ${val}`)
    }
}

module.exports = {
    printHistogram,
    log
}

// const input = [1, 30, 31, 71, 21, 40, 23, 45]
// const size = 10;

// printHistogram(input, size)