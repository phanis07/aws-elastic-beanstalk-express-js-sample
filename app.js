const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Updated to new nodejs app now.... update 2 servers Success . HI '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
