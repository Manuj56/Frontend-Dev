function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) resolve('Order submitted');
      else reject('Submission failed');
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log('Attempt', attempt + ':', 'Success');
      return;
    } catch (err) {
      console.log('Attempt', attempt + ':', 'Failed');
    }
  }
  throw new Error('Order could not be processed');
}

processOrder().catch(err => console.error(err.message));