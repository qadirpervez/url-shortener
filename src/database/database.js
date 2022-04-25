// This file will connect mongo

const mongoose = require("mongoose")
const { ENVIRONMENT, MONGO_DB, MONGO_USER, MONGO_PASS } = require("../config/config")

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

if (ENVIRONMENT == "LOCAL") {
    mongoose.connect(`mongodb://127.0.0.1:27017/${MONGO_DB}`, options);
    console.log('mongodb connection success!');
} else {
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@127.0.0.1:27017/${MONGO_DB}?authSource=admin`, options)
}