const fs = require('fs');
const superAgent = require('superagent');
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`data: ${data}`);
  superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    const { message } = res.body;
    fs.writeFile('dog-img.txt', message, () => {});
  });
});
