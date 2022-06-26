const express = require ('express');
const { connection } = require('mongoose');
const mongoose = require('mongoose');
const app = express();


const PORT = 8000;
const DB_URL = 'mongodb+srv://manibaa123:manibaa123@cluster0.jhq24.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('MongoDB Conecction is Succesful');
})
.catch((err) => console.log('DB Connection Error,',err));

app.listen(PORT, () =>{
    console.log(`App is running on Port: ${PORT}`);
});