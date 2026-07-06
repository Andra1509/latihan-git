const express = require('express');
const {moviesRouter} = require('./src/router/movieRouter');
const app = express();
const port = 3000;



app.use(express.json())
app.use('/api', moviesRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});