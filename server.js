
const  app = require('./app');

const port = process.env.PORT || 7000;

app.listen(port, () =>
  console.log(`Welcome to your application on port ${port}`));
