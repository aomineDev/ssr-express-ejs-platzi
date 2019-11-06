import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

app.get('*', (req, res) => {
  res.json({ holaMundo: true });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on http://localhost:${PORT}`);
});