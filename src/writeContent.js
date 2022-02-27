const {promisifyWriteData}  = require('../source/util/utilFiles');

const writeToFile = async (filePath) => {

    const data = 'tea\r\ncoffee\r\nhot Chocolate';
    // const data = process.args.slice(2);
    promisifyWriteData(filePath,data);
}

writeToFile('./seed/beveragesTest.txt',);

