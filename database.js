const mysql = require('mysql2');
require('dotenv').config();

// Загрузка переменных окружения из файла .env
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Создание подключения к базе данных
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

// Экспорт объекта подключения к базе данных
module.exports = connection;
