const path = require("path")
const fs = require("fs")

const directoryPath = path.join(__dirname, "../public")
const targetFileName = "index.html"
const sizeLimit = 1000000 // 1 MB

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err)
  }

  files.forEach(function (file) {
    if (file === targetFileName) {
      const filePath = `${directoryPath}\\${file}`
      const fileSize = fs.statSync(filePath).size
      if (fileSize > sizeLimit) {
        throw `filePath is too large: ${fileSize}`
      }
    }
  })
})

console.log("All target build files are under the size limit")
