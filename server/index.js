const express = require('express');
const { resolve } = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use('/', express.static(resolve(__dirname, '../src')));

app.listen(PORT);