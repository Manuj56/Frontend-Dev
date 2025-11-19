function randomStep(name) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1000);
    setTimeout(() => {
      if (Math.random() < 0.9) resolve(name + ' completed');
      else reject(name + ' failed');
    }, delay);
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    console.log('Step 1:', await randomStep('Order taken'));
    console.log('Step 2:', await randomStep('Food prepared'));
    console.log('Step 3:', await randomStep('Package ready'));
    console.log('Step 4:', await randomStep('Out for delivery'));
    console.log('Delivery completed!');
  } catch (err) {
    console.log('Pipeline failed!');
  }
}

runPipeline();