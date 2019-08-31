const app = require('express')()
const path = require('path')

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    const data = getRandomList()
    res.render('index', {stars: data})
})

app.get('/glow', (req, res) => {
    res.render('glowing')
})

let getRandomList = () => [
    "Daisy",
    "Asa Akira",
    "Luna",
    "Lycan",
]

const app_port = process.env.PORT || 5000


app.listen(app_port, () => {
    console.log(`listneing on ${app_port}`)
})