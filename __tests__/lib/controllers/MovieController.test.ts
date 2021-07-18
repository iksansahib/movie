import MovieController from "../../../lib/controllers/MovieController";
import IMovieService from "../../../lib/services/IMovieService";
import { BadRequestException } from "../../../lib/utils/exceptions";

describe("Test the search method", () => {
  test("It should throw bad reqeust when query empty", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        return {};
      },
      search: function (query: string) {
        return {};
      }
    }
    const movieController = new MovieController(movieService);
    await movieController.search("").catch(e => {
      expect(e).toEqual(new BadRequestException("query is mandatory"))
    });

  });

  test("It should return data when movieService working fine", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        return {};
      },
      search: function (query: string) {
        return {};
      }
    }
    const movieController = new MovieController(movieService);
    const result = await movieController.search("abc");
    expect(result).toEqual({});

  });

  test("It should throw error when movieService error", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        throw new Error("Error")
      },
      search: function (query: string) {
        throw new Error("Error")
      }
    }
    const movieController = new MovieController(movieService);
    movieController.search("abc").catch(e => expect(e).toEqual(new Error("Error")));

  });
});

describe("Test the detail method", () => {
  test("It should throw bad reqeust when id empty", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        return {};
      },
      search: function (query: string) {
        return {};
      }
    }
    const movieController = new MovieController(movieService);
    await movieController.detail("").catch(e => {
      expect(e).toEqual(new BadRequestException("id is mandatory"))
    });

  });
  test("It should return data when movieService working fine", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        return {};
      },
      search: function (query: string) {
        return {};
      }
    }
    const movieController = new MovieController(movieService);
    const result = await movieController.detail("abc");
    expect(result).toEqual({});

  });

  test("It should throw error when movieService error", async () => {
    const movieService: IMovieService = {
      detail: function (id: string) {
        throw new Error("Error")
      },
      search: function (query: string) {
        throw new Error("Error")
      }
    }
    const movieController = new MovieController(movieService);
    movieController.detail("abc").catch(e => expect(e).toEqual(new Error("Error")));

  });
});