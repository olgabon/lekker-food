const mongoose = require("mongoose")
const Schema = mongoose.Schema

module.exports = mongoose.model("user", new Schema({
    name: String,
    email: String,
    password: String,
    favouriteRecipes: [{type: mongoose.Schema.Types.ObjectId, ref: "favourite"}]
}))