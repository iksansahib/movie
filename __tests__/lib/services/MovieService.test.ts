import axios from "axios";
import MovieService from "../../../lib/services/MovieService";

jest.mock("axios");
describe("Test the search method", () => {
  test("It should return data when imdb website working fine", async () => {
    const movieService = new MovieService();
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: {} });
    const result = await movieService.search("abc");
    expect(result).toEqual({});

  });

  test("It should return data when imdb website working fine", async () => {
    const movieService = new MovieService();
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Error"));
    movieService.search("abc").catch(e => expect(e).toEqual(new Error("Error")));
  });
});

