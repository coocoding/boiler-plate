const express = require('express')
const app = express()
const port = 5000

const mongoose =require('mongoose')
mongoose.connect('mongodb://chae:abcd1234@cluster0-shard-00-00.ed3k5.mongodb.net:27017,cluster0-shard-00-01.ed3k5.mongodb.net:27017,cluster0-shard-00-02.ed3k5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gsfgzl-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MonogoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
