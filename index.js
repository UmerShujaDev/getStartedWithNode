const fs = require("fs");
const http = require("http");
const data = fs.readFileSync(`${__dirname}/data/dev-data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (req.url === "/product") {
    res.end("This is the PRODUCT");
  } else if (req.url === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
      "my-own-header": "hello-to-the-future",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-to-the-future",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
