const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' }); // Proper error handling
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve({ success: true, data: 'Some data' });
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}