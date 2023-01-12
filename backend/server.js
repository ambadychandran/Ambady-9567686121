const app = require('./src/app.js');

const port = process.env.PORT || 5000;

// server running on port 5000
app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);