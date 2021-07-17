import express from 'express';
import Movie from './lib/Movie';

const app = express();
const PORT = 8000;
app.get('/search', async (req, res) => {
  const movie = new Movie();
  const result = await movie.search(req.query['query'] as string);
  res.send(result);
});

app.get('/detail', async (req, res) => {
  const movie = new Movie();
  const result = await movie.detail(req.query['id'] as string);
  res.send(result);
});
app.listen(PORT, () => {
  console.log(`⚡️[server]:SS Server is running at https://localhost:${PORT}`);
});