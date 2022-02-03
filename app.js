const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT||3000


const items=[
  {id:1,name:'s21',price:5500,url:'https://kulhavikruno.000webhostapp.com/diois_img/s21.jpg'},
  {id:2,name:'s20',price:4500,url:'https://kulhavikruno.000webhostapp.com/diois_img/s20.jpg'},
  {id:3,name:'a70',price:2500,url:'https://kulhavikruno.000webhostapp.com/diois_img/a70.jpg'},
  {id:4,name:'a71',price:3500,url:'https://kulhavikruno.000webhostapp.com/diois_img/a71.jpg'},
  {id:5,name:'iPhoneX',price:2300,url:'https://kulhavikruno.000webhostapp.com/diois_img/iPhoneX.jpg'},
  {id:6,name:'iPhone11',price:2900,url:'https://kulhavikruno.000webhostapp.com/diois_img/iPhone11.jpg'},
  {id:7,name:'iPhone12',price:4100,url:'https://kulhavikruno.000webhostapp.com/diois_img/iPhone12.jpg'},
  {id:8,name:'iPhone13',price:7000,url:'https://kulhavikruno.000webhostapp.com/diois_img/iPhone13.jpg'},
  {id:9,name:'s11',price:1900,url:'https://kulhavikruno.000webhostapp.com/diois_img/s11.jpg'},
  {id:10,name:'s12',price:2500,url:'https://kulhavikruno.000webhostapp.com/diois_img/s12.jpg'},
]

app.get('/', (req, res) => {
  res.send(items)
})
app.get('/sortbypriceasc', (req, res) => {
  res.send(items.sort((a,b)=>a.price-b.price))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})