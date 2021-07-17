import express from 'express';
import Movie from './lib/Movie';

const app = express();
app.get('/search', async (req, res) => {
  if (!req.query['query']) {
    res.status(400).send({ message: "Bad Request" });
    return;
  }
  const movie = new Movie();
  const result = await movie.search(req.query['query'] as string);
  res.send(result);
});

app.get('/detail', async (req, res) => {
  if (!req.query['id']) {
    res.status(400).send({ message: "Bad Request" });
    return;
  }
  const movie = new Movie();
  const result = await movie.detail(req.query['id'] as string);
  res.send(result);
});

export default app;