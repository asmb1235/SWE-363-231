console.log("hi")

// get the dir name
// read that dir
// count tha number of files

const { argv } = require('node:process');

argv.forEach(process.argv)

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});