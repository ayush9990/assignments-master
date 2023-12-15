const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.json());

const users = [
  {
    name : "John" , 
    kidneys : [
      {
        healthy : false
      },
      {
        healthy : true
      }
    ]
  }
]

app.get('/', (req, res) => {
  const johnKidneys = users[0].kidneys ;
  const numberOfKidneys = johnKidneys.length ;
  let numHealthyKidneysArray =  johnKidneys.filter((kidney) => kidney.healthy == true);
  let numHealthyKidneys = numHealthyKidneysArray.length ; 
  let numUnhealthyKidneys = numberOfKidneys - numHealthyKidneys ; 
  res.json(
    {
      numberOfKidneys,
      numHealthyKidneys,
      numUnhealthyKidneys
    }
  )

})

app.post('/',(req,res) =>{
    const isHealthy = req.body.isHealthy ;
    users[0].kidneys.push({healthy : isHealthy});
    console.log(users[0].kidneys)
    res.json(
      {
        msg : "Done"
      }
    )
})

app.put('/',(req,res) =>{
  const johnKidneys = users[0].kidneys ;
  for (i = 0 ; i < johnKidneys.length ; i++){
    johnKidneys[i].healthy = true ;
  }

  res.json(
    {
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})