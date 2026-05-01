const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    optionSuccessStatus: 200,
}));


app.get('/api', (req, res) => {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Abidjan&appid=${process.env.API_KEY}`)
    .then(resObj => resObj.text())
    .then(data => {
        res.json(data);
    });
          
})

app.listen(process.env.PORT);