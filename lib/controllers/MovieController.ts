import axios from 'axios';
import IMovieService from '../services/IMovieService';
import { BadRequestException } from '../utils/exceptions';

class MovieController {
  movieService: IMovieService;
  constructor(movieService: IMovieService) {
    this.movieService = movieService;
  }
  async search(query: string) {
    if (query == "") {
      throw new BadRequestException("query is mandatory");
    }

    const result = await this.movieService.search(query);
    return result;
  }

  async detail(id: string) {
    if (!id) {
      throw new BadRequestException("id is mandatory");
    }
    const result = await this.movieService.detail(id);
    return result;
  }
}

export default MovieController;