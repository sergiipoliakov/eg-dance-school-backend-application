const low = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./model/events.json");

const db = low(adapter);

db.defaults({ events: [] }).write();

module.exports = db;
