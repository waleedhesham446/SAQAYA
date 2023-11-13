const express = require('express');
const dotenv = require('dotenv');

const { connectDB } = require('./db');
const userRouter = require('./routers/users');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}...`);
  connectDB();
});