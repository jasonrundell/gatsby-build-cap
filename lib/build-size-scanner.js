const glob = require("glob")
const fs = require("fs")

const sizeLimit = 1000000 // 1 MB
const options = {} // options can be found at https://github.com/isaacs/node-glob

glob("./public/**/index.html", options, (err, files) => {
  if (err) {
    throw `Build Size Scanner ERROR: ${err}`
  }

  files.forEach(file => {
    const fileSize = fs.statSync(file).size
    if (fileSize > sizeLimit) {
      throw `Build Size Scanner found a build file that is too large: ${file} = ${fileSize} bytes`
    }
  })
})

console.log("Build Size Scanner completed with no issues.")
