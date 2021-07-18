import express from 'express';
import MovieController from './lib/controllers/MovieController';
import MovieService from './lib/services/MovieService';
import { BadRequestException, HttpException } from './lib/utils/exceptions';

const app = express();
app.get('/search', async (req, res) => {
  const movie = new MovieController(new MovieService);
  try {
    const result = await movie.search(req.query['query'] as string ?? "");
    res.send(result);
  } catch (e: any) {
    const errorHandlingResult = errorHandling(e);
    res.status(errorHandlingResult.statusCode).send(errorHandlingResult);
  }
});

app.get('/detail', async (req, res) => {
  const movie = new MovieController(new MovieService);
  try {
    const result = await movie.detail(req.query['id'] as string);
    res.send(result);
  } catch (e: any) {
    const errorHandlingResult = errorHandling(e);
    res.status(errorHandlingResult.statusCode).send(errorHandlingResult);
  }
});

export default app;

function errorHandling(e: any) {
  // TODO: need to change this to advance logger package
  if (process.env.NODE_ENV != 'test') {
    console.log(e);
  }
  switch (e.constructor) {
    case BadRequestException:
      return { statusCode: 400, message: e.message };
    case HttpException:
      return { statusCode: 500, message: e.message };
    default:
      return { statusCode: 500, message: e.message };
  }
}
