import { EntityRepository, Repository } from "typeorm";
import { MovieLog } from "../entity/MovieLog";

@EntityRepository(MovieLog)
export class MovieLogRepository extends Repository<MovieLog> {
}