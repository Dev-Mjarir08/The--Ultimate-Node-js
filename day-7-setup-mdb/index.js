import express from 'express';
import { env } from './config/dotenv.js';
import db from './config/db.js';
import bodyParser from 'body-parser';
import UserModel from './models/user.model.js';


const port = env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.render('index');
});

app.post('/', (req, res) => {
  UserModel.create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/');
    })
})

app.get('/viewData', (req, res) => {
  UserModel.find()
    .then((users) => {
      res.render('pages/viewData', { users });
    })
    .catch((err) => {
      console.log(err);
      res.render('/', {
        users: []
      });
    });
});

app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/viewData');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/viewData')
    })
})

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then((user) => {
      res.render('pages/editData', { user });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/viewData')
    })
})
app.post('/edit/:id', (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect('/viewData');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/viewData');
    });
});

app.listen(port, () => {
  console.log('Server Started');
  console.log(`http://localhost:${port}`);
});
