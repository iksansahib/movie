import axios from "axios";
import MovieService from "../../../lib/services/MovieService";
import { HttpException } from "../../../lib/utils/exceptions";

jest.mock("axios");
describe("Test the search method", () => {
  test("It should return data when imdb website working fine", async () => {
    const movieService = new MovieService();
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: {} });
    const result = await movieService.search("abc");
    expect(result).toEqual({});

  });

  test("It should throw error when imdb website error", async () => {
    const movieService = new MovieService();
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Error"));
    movieService.search("abc").catch(e => expect(e).toEqual(new HttpException("Axios http error")));
  });
});

