const fs = require('fs');

function removeExtraSpaces(str) {
    return str.replace(/\s\s+/g, " ");
  }

fs.readFile('sample_file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("\nFile contents below\n");
    console.log(data);
    let strToWrite = removeExtraSpaces(data);
    fs.writeFile('sample_file.txt', strToWrite, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('File written successfully!');
      });
  });

