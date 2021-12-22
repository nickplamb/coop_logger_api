const express = require('express');
const app = express();

const PORT = 8080;

let logger = require('./routes/logger.ts')

app.use('/', logger);

// app.get('/', (request, response) => {
//   response.send('It\'s working.');
// });

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}.`);
});