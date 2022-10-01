const EventEmitter = require('events');

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale();
// const myEmitter = new EventEmitter();
myEmitter.on('newSale', () => {
  console.log('There was an new Sale!');
});

myEmitter.on('newArrival', () => {
  console.log('There was a new Arrival!');
});

myEmitter.on('newSale', () => {
  console.log('Customer Name: Umer Shuja!');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stocks`);
});

console.log('Here is the event listner');

myEmitter.emit('newSale');
myEmitter.emit('newArrival');
myEmitter.emit('newSale', 9);
