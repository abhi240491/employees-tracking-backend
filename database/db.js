const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect('',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        console.log('Database connection established');
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectDB;