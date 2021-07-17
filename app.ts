import express from 'express';
import MovieController from './lib/controllers/MovieController';
import Movie from './lib/controllers/MovieController';
import MovieService from './lib/services/MovieService';

const app = express();
app.get('/search', async (req, res) => {
  if (!req.query['query']) {
    res.status(400).send({ message: "Bad Request" });
    return;
  }
  const movie = new MovieController(new MovieService);
  const result = await movie.search(req.query['query'] as string);
  res.send(result);
});

app.get('/detail', async (req, res) => {
  if (!req.query['id']) {
    res.status(400).send({ message: "Bad Request" });
    return;
  }
  const movie = new MovieController(new MovieService);
  const result = await movie.detail(req.query['id'] as string);
  res.send(result);
});

export default app;