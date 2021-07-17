import axios from 'axios';
import IMovieService from '../services/IMovieService';

class MovieController {
  movieService: IMovieService;
  constructor(movieService: IMovieService) {
    this.movieService = movieService;
  }
  async search(query: string) {
    const result = await this.movieService.search(query);
    return result.data;
  }

  async detail(id: string) {
    const result = await this.movieService.detail(id);
    return result.data;
  }
}

export default MovieController;