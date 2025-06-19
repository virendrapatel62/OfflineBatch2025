const axios = require('axios');

const waitTime = 30 * 1000;

console.log(
  `Service started. Waiting ${waitTime} seconds before starting the server...`,
);

setInterval(() => {
  axios.get('https://kiranabe.onrender.com/api/ping').then((res) => {
    console.log(new Date().toTimeString(), res.data);
  });
}, waitTime); // 30 seconds
// 30 seconds
