const fs = require('fs');

fs.readFile('sample_file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("\nFile contents below\n");
    console.log(data);
  });

  for (i = 0; i < 10000000000; i++){
    let a = 0
    a = a * 2
    //console.log('hi');
  }

console.log("\n\ntrying async with incorrect name") ;

try {
    const data = fs.readFileSync('sample_filed.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }



