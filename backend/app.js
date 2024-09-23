import express from 'express';

const app = express();

let messages = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'Another message' },
];

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', express.json(), (req, res) => {
  const { message } = req.body;
  console.log(`Adding message: ${message}`);
  messages.push({ id: messages.length + 1, text: message });
  res.json(messages);
});

app.listen(8080);
