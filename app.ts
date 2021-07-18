import express from 'express';
import MovieController from './lib/controllers/MovieController';
import MovieLogService from './lib/services/MovieLogService';
import MovieService from './lib/services/MovieService';
import errorHandling from './lib/utils/errorHandling';
import { getConnectionManager, ConnectionManager, Connection, createConnection } from "typeorm";
import { BadRequestException, HttpException } from './lib/utils/exceptions';

const app = express();

app.get('/search', async (req, res) => {
  try {
    const movie = new MovieController(new MovieService, new MovieLogService);
    const result = await movie.search(req.query['query'] as string ?? "");
    res.send(result);
  } catch (e: any) {
    const errorHandlingResult = errorHandling(e);
    res.status(errorHandlingResult.statusCode).send(errorHandlingResult);
  }
});

app.get('/detail', async (req, res) => {
  try {
    const movie = new MovieController(new MovieService, new MovieLogService);
    const result = await movie.detail(req.query['id'] as string);
    res.send(result);
  } catch (e: any) {
    const errorHandlingResult = errorHandling(e);
    res.status(errorHandlingResult.statusCode).send(errorHandlingResult);
  }
});
export default app;