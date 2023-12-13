const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Worlddddddd!')
})

app.post('/bakend-api/conversation',(req,res) =>{
    const message = req.body.message ; 
    console.log(req.body);
    console.log(message);
    res.json(
        {
            output: "yo yo yo"
        }
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})