require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const proxyRoute = process.env.PROXY_ROUTE || '/libmath';
const proxy = require('./proxy');

app.use(express.static(path.join(__dirname, 'public')));
app.use(proxyRoute, proxy);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/portal.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Stealth Proxy running on port ${PORT}`));