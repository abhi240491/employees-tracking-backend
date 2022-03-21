const express = require('express');
const app = express();
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

app.use(cors())

app.use('/api/auth',authRoutes);

port=PROCESS.ENV.PORT||5000;
app.listen(port, ()=>{console.log(`Listening to port number ${port}`)});