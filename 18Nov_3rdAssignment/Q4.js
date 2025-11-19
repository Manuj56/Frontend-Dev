function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve('Server A deployed');
      else reject('Server A failed');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve('Server B deployed');
      else reject('Server B failed');
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(results => console.log('Deployment completed for all servers', results))
  .catch(err => console.error('Deployment error (all):', err));

Promise.race([serverA(), serverB()])
  .then(first => console.log('Fastest response:', first))
  .catch(err => console.error('Deployment error (race):', err));