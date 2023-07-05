const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000; // Port for the proxy server

app.use(cors()); // Enable CORS headers
app.use(express.json());

app.get('/api/anime-list', async (req, res) => {
  try {
    const response = await axios.get('https://api.myanimelist.net/v2');
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
