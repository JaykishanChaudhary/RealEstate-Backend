
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 5000;
const newPropertyRoute=require('./routes/addproperty');
const GetListRoute=require('./routes/GetPropertyList');
const cors=require('cors');

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=>{
    console.log('successfully connected to mongoose')
})
mongoose.connection.on('error', (err)=>{
    console.log('error while connecting to mongoose', err)
})

require('./models/user')
mongoose.model('User')

app.use(express.json())
app.use(cors());
app.use(require('./routes/auth'))
app.use('/',newPropertyRoute)
app.use('/',GetListRoute)

app.listen(PORT, () => {
    console.log('app is running on PORT', PORT)
})

