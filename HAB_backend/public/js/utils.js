const fs = require('fs')


const mkdir = (filePath) => {
    const arr = filePath.split('/');
    let dir = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        dir = dir + '/' + arr[i];
    }
    fs.writeFileSync(filePath, '')
}

exports.getFile = (filePath) => {
    const files = fs.readdirSync(filePath)
    const filesContent = files.map(fileName => {
        const data = fs.readFileSync(filePath + fileName,'utf8')
        return data
    })
    return filesContent
}
exports.writeFile = (filePath,jsonData) => {
    if (!fs.existsSync(filePath)) {
        mkdir(filePath);
    }

    fs.appendFile(filePath, jsonData, 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    })
}


exports.getAmongStr = (targetStr, startStr, endStr) => {
    let startPos = targetStr.indexOf(startStr) + startStr.length
    let endPos = targetStr.indexOf(endStr, startPos)
    return targetStr.substring(startPos, endPos)
  }