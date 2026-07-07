const express = require('express');
const {moviesRouter} = require('./src/router/movieRouter');
const userRouter = require('./src/router/userRouter');
const app = express();
const port = 3000;


var corsOptions = {
origin: 'http://localhost:3000',
optionsSuccessStatus: 200
}


// app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', moviesRouter)
app.use('/', userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});