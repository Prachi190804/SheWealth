const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://<db_username>:<db_password>@ac-fvvo4cy-shard-00-00.lyzrq0r.mongodb.net:27017,ac-fvvo4cy-shard-00-01.lyzrq0r.mongodb.net:27017,ac-fvvo4cy-shard-00-02.lyzrq0r.mongodb.net:27017/?ssl=true&replicaSet=atlas-ctsouc-shard-0&authSource=admin&appName=Cluster0");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }

    };

    module.exports = connectDB;