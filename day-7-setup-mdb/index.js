import express from 'express';
import { env } from './config/dotenv.js';
import db from './config/db.js';
import bodyParser from 'body-parser';
import { createUser } from './controllers/user.controller.js';

const port = env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.render('index');
});

// 👇 INSERT INTO DB
app.post('/user/create', createUser);

app.listen(port, () => {
  console.log('Server Started');
  console.log(`http://localhost:${port}`);
});
