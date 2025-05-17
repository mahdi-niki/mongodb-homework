const mongoose = require('mongoose');
const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("connected to mongo");
    }catch(error){
        console.log("error connecting to db",error)
    }
}
module.exports = connectDB;