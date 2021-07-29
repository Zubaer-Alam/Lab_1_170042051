/*FS module or File System Module is also a Global Module
    Core Functions:
        readFile()
        writeFile()
        appendFile()
        unlink(): Deleting a file
        Rename()
*/
const fs = require('fs');

//Synchronous and Asynchronous Functions. needs callBack when it stops executing
//no callBack in synchronous function.
//synchronous functions have Sync in the end

//fs.writeFileSync('./content/demoFile.txt', 'We are learning JavaScript.');
//fs.appendFileSync('./content/demoFile.txt', 'this is appended. ');

/*fs.rename('./content/renamedFile.txt', './content/demoFile.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Rename Successful!');
  }
});*/

/*console.log('before');

fs.readFile('./content/demoFile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('./content/demoFile.txt', ' read successful', (err) => {
      if (err) {
        console.log(err);
      }
    });
    fs.readFile('./content/demoFile.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

console.log('after');
*/

fs.unlinkSync('./content/demoFile.txt');
