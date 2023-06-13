const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', false);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION

app.get('/', (req, res) => {
    res.send('hello world')
});

app.post('/', (req, res) => {
    res.send('this is post req')
})


app.post('/api/customers', (req, res) => {
    console.log(req.body)
})

const start = async () =>  {
    try{
        await mongoose.connect(CONNECTION);
        
        app.listen(PORT, () => {
            console.log(`app listening on port ${PORT}!`)
        })
    }catch(err){
        console.log(err.message)
    }
}

start();