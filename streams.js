// used to process (read and write) data piece by piece (chunks), without completing the whole read and write operation, and therefore without keeping all the data in the memory
// stream used by youtube and netflix.
// perfect for handling large volume of data, for example videos
// More efficient data processing  in terms of memory (no need to keep all the data in memory) and time(we don't have to wait until all the data is available)
// Four type of streams
// readable streams -> from which we can read(consume) data -> e.g http request, fs read streams -> important events: data, end -> functions: pipe(), read()
// writeable streams -> from which we can write data -> e.g http response, fs write streams -> important events: drain, finish -> functions:  write(),end()
// duplex streams -> streams that are both readable and writeable -> e.g net web socket
// transform streams -> streams that transform data as it is written or read -> e.g zlib Gzip creation
// ---------------------------
// back Pressure -> data zada receive hra he lkn send ni ho para. to kch data send ho jata he kch miss ho jata.
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  // solution 1
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //   solution 2: streams
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.on('data', (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', () => {
  //     res.end('err');
  //   });
  // solution 3
  //   back pressure solution
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  //   readableSource.pipe(writeableDestination)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening....');
});
