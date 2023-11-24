const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')




app.get('/', (req, res) =>
{
    res.send('<h1>Fuck You</h2>')
})

app.listen(port, ()=> {
    console.log('listening on port '+ port)
})