function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) {
        resolve(['UI glitch', 'API timeout', 'Login failure']);
      } else {
        reject('API error');
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs.map((b, i) => ({id: i+1, issue: b}))))
  .catch(err => console.error('Failed to fetch bugs:', err));