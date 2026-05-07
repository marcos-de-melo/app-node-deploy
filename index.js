const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Node.js app deployed successfully!');
});

server.get('/lista', (req, res) => {
    res.send([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' }

    ])
});


server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});