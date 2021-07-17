
interface IMovieService {
  search(query: string): any;
  detail(id: string): any;
}

export default IMovieService;