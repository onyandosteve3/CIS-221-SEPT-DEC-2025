const express = require('express')
const bodyParser  = require('body-parser')
const path = require('path')
const cors = require('cors');
const { app_port } = require('./config');


const pageRoutes = require('./routes/pages');

const app = express();
const server = require('http').createServer(app);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));


// routes
app.use(pageRoutes);

server.listen(app_port, () => {
    console.log(`Server running on port ${app_port}`);
});