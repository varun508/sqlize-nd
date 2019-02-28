const sequelize = require('sequelize');
const db = require('../dbConfig');

const Gig = db.define("gig", {

    title: {
        type: sequelize.STRING
    },
    technologies: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.STRING
    },
    budget: {
        type: sequelize.STRING
    },
    contact_email: {
        type: sequelize.STRING
    },
})