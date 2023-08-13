// import generateName from 'sillyname';
// var sillyName = generateName();
// console.log(`my name is ${sillyName}`);

// import superheroes  from 'superheroes'

// console.log(superheroes.random());

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type in your your URL: ", name: "URL" },
  ])
  .then((answers) => {
    const url = answers["URL"];
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));

    fs.writeFile("url.txt", url, (err) => {
// sourcery skip: use-braces
      if (err) throw err;
      console.log("file is created successfully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
