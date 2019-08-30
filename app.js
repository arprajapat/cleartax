var fs = require('fs'); 
const { printHistogram } = require('./histogram')

fs.readFile('input1.txt', function(err, buffer) {
    if(err) throw err

    try {
        const data = buffer.toString().split('\n');
        // can add more data validation like interger, non-negative
        const arr = data[0].split(',').map(Number).filter(item => (!isNaN(item)));
        const bucketSize = parseInt(data[1]);
        if(isNaN(bucketSize)) throw new Error('Invalid bucketSize')
        printHistogram(arr, bucketSize)
    } catch (error) {
        console.log(error)
    }
});