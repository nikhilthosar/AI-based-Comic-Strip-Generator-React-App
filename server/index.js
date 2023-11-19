const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

async function query(data) {
  const response = await fetch(
    'https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',
    {
      headers: {
        Accept: 'image/png',
        Authorization: 'Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

  const result = await response.blob();
  return result;
}

app.post('/api/query', async (req, res) => {
  const data = req.body;

  try {
    const result = await query(data);
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
