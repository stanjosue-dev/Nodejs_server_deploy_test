const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();


const allowedOrigins = [
    'http://127.0.0.1:5501',
    'https://stanjosue-dev.github.io'
];

app.use(cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
}));

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && !allowedOrigins.includes(origin)) {
        return res.status(403).json({ error: "Accès interdit : Origine non autorisée." });
    }
    if (!origin) {
        return res.status(403).json({ error: "Accès interdit : Les requêtes directes ne sont pas autorisées." });
    }
    next();
});


app.get('/api', (req, res) => {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Abidjan&appid=${process.env.API_KEY}`)
    .then(resObj => resObj.text())
    .then(data => {
        res.json(data);
    });
          
})


const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=>{
    console.log(`serveur démarré sur le port : ${PORT}`)
});