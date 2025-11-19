function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) resolve('Water boiled');
      else reject('Boiling failed');
    }, randomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve('Coffee brewed');
      else reject('Brewing failed');
    }, randomDelay());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) resolve('Poured into cup');
      else reject('Pouring failed');
    }, randomDelay());
  });
}

boilWater()
  .then(result => {
    console.log(result);
    return brewCoffee();
  })
  .then(result => {
    console.log(result);
    return pourIntoCup();
  })
  .then(result => {
    console.log(result);
    console.log('Coffee ready for the team!');
  })
  .catch(err => {
    console.error('Coffee process failed:', err);
  });