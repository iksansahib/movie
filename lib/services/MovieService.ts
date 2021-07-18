import axios from 'axios';
import { HttpException } from '../utils/exceptions';
import IMovieService from './IMovieService';

class MovieService implements IMovieService {
  async search(query: string) {
    try {
      const result = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=faf7e5bb&s`);
      return result.data;
    } catch (e) {
      throw new HttpException(`Axios http error`);
    }
  }

  async detail(id: string) {
    const result = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=faf7e5bb&s`).catch(e => {
      throw new HttpException(`Axios http error`);
    });
    return result.data;
  }
}

export default MovieService;