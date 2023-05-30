const express = require('express');
const app = express();
const connection = require('./database');
const cors = require("cors");
const errorHandler = require("./errorHandler");
const bodyParser = require("body-parser");

const { LOCAL_URL } = process.env;

// Определите маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('hi!');
});

app.use(cors({
  origin: 'http://localhost:5173' // Замените на свой домен или адрес клиента
}));

app.use(errorHandler);
app.use(bodyParser.json());

app.get('/api/channel', (req, res) => {
  connection.query('SELECT * FROM channel', (error, results) => {
    if (error) {
      console.error('Ошибка при выполнении запроса:', error);
      res.status(500).json({ error: 'Произошла ошибка' });
    } else {
      res.json(results);
    }
  });
});

// Запустите сервер на порту 3000
app.listen(3000, () => {
  console.log('Server run on port 3000');
});
