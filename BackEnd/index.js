<<<<<<< HEAD
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/list')

const list=mongoose.Schema({
    input:String
});

const DoList=mongoose.model("LIST",list);



app.post('/',async(req,res)=>{
    DoList.create(req.body).then(l=>res.json(l)).catch((e)=>console.log(e));
})


app.get('/getUsers',(req,res)=>{
    DoList.find().then(users=>res.json(users)).catch((error)=>console.log(error));

});

app.use(bodyParser.json());

app.post('/Delete', (req, res) => {
  const { deleteid } = req.body;
  // Assuming DoList is a model representing your data
  DoList.deleteOne({ _id: deleteid })
    .then(result => {
      console.log(result);
      res.send("Successfully deleted."); // Send response to client
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Error occurred while deleting."); // Send error response to client
    });
});

app.listen(3000,()=>{
    console.log("Server is listening at 3000");
})






=======
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/list')

const list=mongoose.Schema({
    input:String
});

const DoList=mongoose.model("LIST",list);



app.post('/',async(req,res)=>{
    DoList.create(req.body).then(l=>res.json(l)).catch((e)=>console.log(e));
})


app.get('/getUsers',(req,res)=>{
    DoList.find().then(users=>res.json(users)).catch((error)=>console.log(error));

});

app.use(bodyParser.json());

app.post('/Delete', (req, res) => {
  const { deleteid } = req.body;
  // Assuming DoList is a model representing your data
  DoList.deleteOne({ _id: deleteid })
    .then(result => {
      console.log(result);
      res.send("Successfully deleted."); // Send response to client
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Error occurred while deleting."); // Send error response to client
    });
});

app.listen(3000,()=>{
    console.log("Server is listening at 3000");
})






>>>>>>> 41b52bd9a9669270368e55a89cdc47bd25d2e136
