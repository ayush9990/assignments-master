const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const { createTodo,updateTodo } = require('./types');   
const {todos} = require('./db')

app.use(bodyParser.json());
app.use(cors());
 

app.post('/todos', async (req, res) => {
  const createPayload = req.body ; 
  console.log(createPayload);
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success){
    res.status(411).json({
        msg: "you have sent wrong inputs"
    }
    )
    return;
  }
  try
    {
        const newTodoCreated = await todos.create({
        title : createPayload.title , 
        description : createPayload.description,
        completed : false
        })

        res.json({
            msg : "Todo created successfully",
            id: newTodoCreated._id
        })
    }
    catch(err){
        console.error('Error fetching courses:', err);
        res.send(err)
    }

})

app.get('/todos', async (req, res) => {
    
    const todolist = await todos.find({});

    res.json({
        todolist: todolist
    })

  
})

app.put('/completed', async (req, res) => {
    const createPayload = req.body ; 
    const parsePayload = updateTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
        msg: "you have sent wrong inputs"
        })
    return;
    }

    try{
    await todos.updateOne({
        _id: req.body.id
        }, {
        completed: true  
        })

    res.json({
            msg: "Todo marked as completed"
        })
    }
    catch(err){
        res.send(err);
    }

    })


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})