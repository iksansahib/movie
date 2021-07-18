import axios from 'axios';
import IMovieLogService from '../services/IMovieLogService';
import IMovieService from '../services/IMovieService';
import { BadRequestException } from '../utils/exceptions';

class MovieController {
  movieService: IMovieService;
  movieLogService: IMovieLogService;
  constructor(movieService: IMovieService, movieLogService: IMovieLogService) {
    this.movieService = movieService;
    this.movieLogService = movieLogService;
  }
  async search(query: string) {
    if (query == "") {
      throw new BadRequestException("query is mandatory");
    }

    const result = await this.movieService.search(query);
    this.movieLogService.insert('/search', `query=${query}`);
    return result;
  }

  async detail(id: string) {
    if (!id) {
      throw new BadRequestException("id is mandatory");
    }
    const result = await this.movieService.detail(id);
    this.movieLogService.insert('/detail', `id=${id}`);
    return result;
  }
}

export default MovieController;