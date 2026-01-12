import express from 'express'

const PORT = 8081
const app = express();

const todos = []

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.render('view', {todos})
})

app.get('/delete', (req, res) => {
    console.log(req.query.id)
    return res.redirect(req.get('Referrer') || '/')
})

app.post('/create', (req, res) => {
    let todo = {
        id: Date.now(),
        text: req.body.text
    }
    todos.push(todo)
    return res.redirect(req.get('Referrer' || '/'))
 
})
   app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log('Server Start at :http://localhost:8081');
        }
    })