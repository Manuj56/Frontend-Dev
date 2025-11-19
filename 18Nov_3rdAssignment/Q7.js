function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) resolve('Profile Loaded');
      else reject('Profile Failed');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) resolve('Posts Loaded');
      else reject('Posts Failed');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) resolve('Messages Loaded');
      else reject('Messages Failed');
    }, 1000);
  });
}

(async function run() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  results.forEach((r, i) => {
    const name = ['Profile', 'Posts', 'Messages'][i];
    if (r.status === 'fulfilled') console.log(name, 'succeeded:', r.value);
    else console.log(name, 'failed:', r.reason);
  });
  const totalTime = Date.now() - start;
  console.log('Total time (ms):', totalTime);
})();