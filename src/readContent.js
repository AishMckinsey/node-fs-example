const {promisfyReadDir, promisfyReadFile} = require('../source/util/utilFiles');
const path = require('path');


const readFiles = async (directoryPath) => {
    const files = await promisfyReadDir(directoryPath);
    // all file names with .txt
    
    const fileName = files.map( (fileName)=> path.parse(fileName).name);
    // parse(fileName).( ) <= has differnet attributes like name, root, etc
    
    const allPromiseFiles = files.map((fileWithoutTxt)=> promisfyReadFile(`${directoryPath}/${fileWithoutTxt}`));
    // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
    // Promises of three files will look something like this

    const allFilesData = await Promise.all(allPromiseFiles);
    
     const finalAns = allFilesData.reduce( (acc, allFilesData, index)=>{
         return {
             ...acc,
             [fileName[index]]:allFilesData
         }
     },{});

     console.log(finalAns)
}

readFiles('./seed');