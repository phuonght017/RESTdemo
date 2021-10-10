const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST");
//     res.send({color: 'red' });
// })

app.get('/r/:something', (req, res) => {
    console.log("pattern REQUEST");
    res.send("PATTERNNNN!!");
})

app.get('/', (req, res) => {
    console.log("HOME REQUEST");
    res.send('WELCOME TO HOMEPAGE');
})

app.get('/cats', (req, res) => {
    console.log("CAT REQUEST");
    res.send('MEOWW');
})

app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST");
    res.send('HOOF');
})

app.post('/cats', (req, res) => {
    res.send("POST REQUEST to cats");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    ig (!q) {
        res.send("Nothing found");
    }
    res.send(`This is result for ${q}`);
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})
