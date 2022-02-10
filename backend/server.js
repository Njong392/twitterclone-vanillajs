const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>hello world!</h1>")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on PORT ' + PORT)
})