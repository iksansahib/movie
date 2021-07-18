import IMovieLogService from "./IMovieLogService";

export default class MovieLogService implements IMovieLogService {
  async insert(endpoint: string, params: string) {
    return true
  }

}