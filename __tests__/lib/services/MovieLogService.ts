import axios from "axios";
import MovieLogService from "../../../lib/services/MovieLogService";

jest.mock("axios");
describe("Test the search method", () => {
  test("It should return data when imdb website working fine", async () => {
    const movieLogService = new MovieLogService();
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: {} });
    const result = await movieLogService.insert("abc", "q");
    expect(result).toBeTruthy();
  });

});

