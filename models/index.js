const dbConfigUrl = require("../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfigUrl.url;
db.tutorials = require("./tutorials.model")(mongoose);
db.users = require("./users.model")(mongoose);
db.enrollments = require("./enrollments.model")(mongoose);

module.exports = db;
