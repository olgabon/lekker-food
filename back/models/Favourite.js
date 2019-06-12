const mongoose = require("mongoose")
const Schema = mongoose.Schema

module.exports = mongoose.model("favourite", new Schema({
    uri: String,
    label: String,
    image: String,
    url: String 
}))