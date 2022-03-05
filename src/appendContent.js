const {promisifyAppendFile}  = require('../src/util/utilFiles');

const appendToFile = async (filePath) => {

    const data = '\nextra Beverages';
    promisifyAppendFile(filePath,data);
}

appendToFile('./seed/beveragesTest.txt',);