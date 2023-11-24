const config= require("../config/config");

const mongoose =  require("mongoose");


mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = config.url;

db.user =require("./user.model")(mongoose)

module.exports = db;