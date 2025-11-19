console.log('Start');
setTimeout(() => console.log('macrotask: setTimeout callback'), 0);
Promise.resolve().then(() => console.log('microtask: Promise.then callback'));
console.log('Synchronous log');
console.log('End');