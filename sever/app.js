const express = require("express");
const collection = require("./mongo")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


app.get("/",cors(),(req,res)=> {
   
})

app.post("/login",(req,res)=> {
    const {email,password} = req.body;
    collection.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")

            }else{
                res.json("error")
            }
        }else{
            res.json("not exist")
        }
    })
})

app.post("/register",(req,res)=> {
    collection.create(req.body)
    .then(employees => {
        res.json(employees)
       
    })
    .catch(err => res.json(err))
})


app.listen(8000, ()=> {
    console.log("port connected")
})