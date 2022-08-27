const express = require('express')
const app = express()
const port = 3001

const middleware =require('./utilities/midleware')

app.use(express.json())
app.use(middleware.RequestLogger)



let me ={
    name: "kebba",
    last: "waiga",
    Status: "online"
};

let users = [
  {
    id: 1,
    userName: 'kebba waiga',
    phone: '2493268',
    password: 'Howareyoudoing1',
    Status: true

  },
  { 
   id: 2,
    userName: 'buba camara',
    phone: '2493263',
    password: '12345',
    status: false

  }
];


app.get('/', (req, res) => {
  res.send('Hellow World!')
});
app.get('/me',(req, res) =>{
    res.json(me)
} );
 
app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const user = users.find((user) => user.id ===Number(id))
  
  if (user) {
    res.json(user)
  }
  else{
    res.status(404).end()
  }
});

// app.delete('/users/:id', (req, res)=>{
//   const id = req.params.id;
//    users = users.filter((user) => user.id !== Number(id))
// })

app.delete('/users/:id', (req , res) =>{
  const id = req.params.id;
  users = users.filter((user) =>(user.id !==id))
});

app.get('/users', (req, res)=>{
  res.json(users);
})

app.post('/users', (req, res) => {
  const container = req.body
  res.json(container)
  console.log(container);
})


// app.use(middleware.unknownExport)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})