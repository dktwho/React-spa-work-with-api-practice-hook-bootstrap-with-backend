const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());


// /meme?top=...&bottom=...///
app.get('/meme', async (req, res) => {
  const response = await fetch(
    `http://apimeme.com/meme?meme=2nd-Term-Obama&top=${req.query.top}&bottom=${req.query.bottom}`
  );
  res.json(response.url);
});

app.listen(3002, () => console.log('server start'));
