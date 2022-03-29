const { parsed, error } = require('dotenv').config();

if (error) throw error;

module.exports = parsed;
