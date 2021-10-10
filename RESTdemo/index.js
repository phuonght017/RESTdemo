const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Viet',
        comment: 'oc oc oc oc'
    },
    {
        id: uuid(),
        username: 'Phuongg',
        comment: 'chac tao vui'
    },
    {
        id: uuid(),
        username: 'Chieu',
        comment: 'Met quaaa'
    },
    {
        id: uuid(),
        username: 'RING FOR ME',
        comment: 'Loi cua minh'
    },
    {
        id: uuid(),
        username: 'Ackerman',
        comment: 'Hahahaaa'
    }
]

app.get('/comment', (req,res) => {
    res.render('comments/index.ejs', { comments });
})

app.get('/comment/new', (req, res) => {
    res.render('comments/new.ejs')
})

app.post('/comment', (req,res) => {
    const {username, comment} = req.body;
    comments.push({id : uuid(), username, comment});
    res.redirect('/comment');
})

app.get('/comment/:id', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id == id);
    res.render('comments/show.ejs', {comment}) 
})

app.get('/comment/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id == id);
    res.render('comments/edit.ejs', {comment});
})

app.patch('/comment/:id', (req,res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id == id);
    foundComment.comment = newCommentText;
    res.redirect('/comment');
})

app.delete('/comment/:id', (req,res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id != id);
    res.redirect('/comment');
})

app.get('/tacos', (req,res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Here are your ${qty} ${meat}`);
})
app.listen(3000, () => {
    console.log("ON PORT 3000");
})