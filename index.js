const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        "hello"
  });
  });

app.get('/mobile-app/v1/validate-domain', (req, res) => {
  res.send({
    name: 'Invgate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg',
    url:'https://invgate-test.herokuapp.com'
});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});