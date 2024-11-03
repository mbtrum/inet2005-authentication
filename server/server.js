import express from 'express';
import usersRouter from './routes/users.js';
import homeRouter from './routes/home.js';

const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.use('/api/', homeRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});