import axios from 'axios';

class Movie {
  constructor() { }
  async search(query: string) {
    const result = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=faf7e5bb&s`);
    return result.data;
  }

  async detail(id: string) {
    const result = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=faf7e5bb&s`);
    return result.data;
  }
}

export default Movie;