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

const getDogImage = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`data: ${data}`);

    const res = await superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const { message } = res.body;
    console.log(`result: ${message}`);

    await writeFilePro(`dog-img.txt`, message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};

getDogImage();
