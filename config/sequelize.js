const Sequelize = require('sequelize');
const process = require('process')
require('dotenv').config();
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});
const db = {};
connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.config = db.product = require('../app/models/config.js')(connection, Sequelize);

db.updateOrCreate = (model, where, newItem, beforeCreate) => {
    return model
        .findOne({ where })
        .then(item => {
            if (!item) {
                Promise.resolve(beforeCreate)
                    .then(() =>
                        model.create(newItem)
                            .then(item => ({ item, created: true }))
                    )
            }
            return model
                .update(newItem, { where: where })
                .then(item => ({ item, created: false }))
        })
}

module.exports = db;