const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');


// read dir to give all the files
const promisfyReadDir = (dirPath) => {
    return new Promise( (resolve, reject) =>{
        fs.readdir(dirPath,'utf-8',(err, data) => {
            if(err)
                reject(err);
            else
                resolve(data);
        });
    });
};

// Read the contents of the files
const promisfyReadFile = (filePath) => {
    return new Promise( (resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data)=>{
            if(error)
                reject(error);
            else    
                resolve(data.toString().split('\r\n'));
        })
    })
};

// read files and filters based on filter character = first character 
const readAndFilterFiles = async (filePath, filterCharacter = null) => {
    return new Promise((resolve ,reject) => {
      fs.readFile(filePath, 'utf-8', (error, data) => {
          if(error){
              reject(error);
          }
          if(filterCharacter !== undefined || filterCharacter !== null){
              resolve(data.split('\r\n').filter((data)=> data.toLowerCase()[0] !== filterCharacter.toLowerCase()));
          }
          else {
              resolve(data.split('\r\n'));
          }
         
      })
  })
  }
// Write Contents to the file
const promisifyWriteData = (filePath,data) => {
    return new Promise( (resolve, reject) => {
        fs.writeFile(filePath,data,function(error, data){
            if (error) 
                reject(error); 
            else 
                resolve(data);
        });
    });
}

// Appends content to the file 
const promisifyAppendFile = (filepath, data) =>{
    return new Promise((resolve,reject)=>{
      fs.appendFile(filepath, data, (err) => {
        if (err) {
          reject(err);
        }else{
          resolve()
        }
      });
    })
  }
  
  
  
module.exports = {
    promisfyReadDir,
    promisfyReadFile,
    promisifyWriteData,
    promisifyAppendFile,
    readAndFilterFiles
}