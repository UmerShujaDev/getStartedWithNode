const fs = require('fs');
const superAgent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('File not Found 😥');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      if (err) reject('Could not write the File 😥');
      resolve('success');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`data: ${data}`);
    return superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    const { message } = res.body;
    return writeFilePro('dog-img.txt', message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch((err) => {
    console.log(err);
  });
