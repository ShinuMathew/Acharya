const mongoose = require('mongoose'),
    config = require('../config/db-config');

class MongoClient {
    getConnection(database) {
        if (mongoose.connection.db.databaseName !== database) {
            mongoose.connect(`${config.db.protocol}://${config.db.host}:${config.db.port}/${database}`)
                .then(() => console.log("Connected to Mongo DB"))
                .catch(err => console.log(err));
        }
        return mongoose;
    }
}

module.exports = MongoClient;