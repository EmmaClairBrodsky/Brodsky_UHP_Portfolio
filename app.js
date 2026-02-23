// Import our Express dependency
const path = require('path');
const express = require('express');
// Create a new server instance
const app = express();
// Port number we want to use on this server
const PORT = 3000;

const templatesPath = path.join(__dirname, 'templates');

// Add your code here
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(templatesPath, 'index.html'));
});

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));