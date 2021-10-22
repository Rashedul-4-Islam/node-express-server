const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/',(req,res) =>{
    res.send('Hello From our first practice ever node  show result localhost')
});

const users = [
    {id:0, name:"nayem",email:'user1@gmail.com',phone:8564},
    {id:1, name:"shakib",email:'user2@gmail.com',phone:8564},
    {id:2, name:"Mushfiq",email:'user3@gmail.com',phone:8564},
    {id:3, name:"Mahedi",email:'user4@gmail.com',phone:8564},
    {id:4, name:"Saifuddin",email:'user5@gmail.com',phone:8564},
]

// app.get('/users',(req,res) =>{
//     res.send(users)
// });
app.get('/users',(req,res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});
// app method 
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    res.json(newUser)
})

app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port,()=>{
    console.log('listening to port',port);
});