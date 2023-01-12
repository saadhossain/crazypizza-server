const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())

require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@firstmongodb.yjij5fj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbConnect = () => {
    //Make a Collection for Pizza's
    const pizzaCollection = client.db('crazyPizza').collection('pizzas')
}

dbConnect()
//Default Route
app.get('/', (req, res) => {
    res.send('CrazyPizza Server is Running')
})

//Add A listener to Server
app.listen(port, ()=> {
    console.log(`CrazyPizza Server is Running on Port ${port}`);
})