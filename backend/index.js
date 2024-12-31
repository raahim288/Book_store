
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookmodels');
// const Book = require('./routes/books_route');
const books_route=require('./routes/books_route')
const cors = require('cors');

const app = express();

const PORT = 5555;
const MONGO_URI = 'mongodb+srv://mernapp:raahim123@cluster0.8yeov.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL (React dev server)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If you're working with sessions or cookies
}));



app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('Welcome to MERN')
})

app.use('/books',books_route)

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Mongo db is connected")
        app.listen(PORT, () => {
            console.log(`App is running at port ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e)
    })