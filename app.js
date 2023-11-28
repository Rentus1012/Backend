//시퀄라이즈, mysql db 연결, 로그인, 회원가입 구현....하 시발 
//존나 어렵네




const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')


// app.get('/', (req, res) =>
// {
//     res.render('index') // ./views/index.html을 불러오겟다. 하지만 index 가 없으면 오류 발생.
// })


// app.get('/', (req, res) =>
// {
//     res.send('<h1>Fuck You</h2>')
// })

app.get('/', (req, res) =>
{
    res.render('index')
})
//프로필
app.get('/profile', (req, res) =>
{
    res.render('profile')
})
app.get('/login', (req, res) =>
{
    res.send("<h2>로그인 창입니다. 하지만 아무것도 없습니다.\n</h2>그러니 꺼지세욤.")
})


app.listen(port, ()=> {
    console.log('listening on port '+ port)
})