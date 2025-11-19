function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callbackHellPipeline(done) {
  setTimeout(() => {
    console.log('design');
    setTimeout(() => {
      console.log('build');
      setTimeout(() => {
        console.log('test');
        setTimeout(() => {
          console.log('deploy');
          setTimeout(() => {
            console.log('celebrate');
            if (done) done();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

callbackHellPipeline(() => console.log('Callback pipeline finished'));

async function asyncAwaitPipeline() {
  await delay(1000);
  console.log('design');
  await delay(1000);
  console.log('build');
  await delay(1000);
  console.log('test');
  await delay(1000);
  console.log('deploy');
  await delay(1000);
  console.log('celebrate');
  console.log('Async/await pipeline finished');
}

asyncAwaitPipeline();