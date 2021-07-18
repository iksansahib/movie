import { getCustomRepository } from "typeorm";
import { MovieLog } from "../database/entity/MovieLog";
import { MovieLogRepository } from "../database/repositories/MovieLogRepository";
import { RepositoryException } from "../utils/exceptions";
import IMovieLogService from "./IMovieLogService";

export default class MovieLogService implements IMovieLogService {
  async insert(endpoint: string, params: string) {
    const movieLogRepository = getCustomRepository(MovieLogRepository, "default");
    try {
      movieLogRepository.save({ endpoint, params });
      return true;
    } catch (e) {
      throw new RepositoryException("MovieLogRepository.save error");
    }
  }

}