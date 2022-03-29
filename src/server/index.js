require('./config.js');
// const express = require('express');
const mysql = require('mysql');

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// mysql
const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

connection.connect();

connection.query('SELECT 1', (err, results, fields) => {
	if (err) throw err;

	console.log(results);
});

connection.end();
