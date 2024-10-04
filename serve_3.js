const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get('/api/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Ta funcionando essa bagaça na Posta:${port}`);
});
