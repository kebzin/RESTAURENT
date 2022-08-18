const express = require('express')
const app = express()
const port = 3000


const me ={
    name: "kebba",
    last: "waiga",
    Status: "online"
}


app.get('/', (req, res) => {
  res.send('Hellow World!')
})
app.get('/me',(req, res) =>{
    res.json(me),
    res.send("hello Waiga")
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})