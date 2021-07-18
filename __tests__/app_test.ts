import request from "supertest";
import app from "../app";
import MovieController from "../lib/controllers/MovieController";
import { BadRequestException } from "../lib/utils/exceptions";
// const MovieController = jest.fn().mockResolvedValueOnce(() => {
//   return {
//     search: {}
//   }
// });

jest.mock('./../lib/controllers/MovieController', () => jest.fn());
const MockedMovieController = MovieController as unknown as jest.Mock;
describe("Test the root path (200 status code)", () => {
  test("It should response the GET /search with query method", done => {
    MockedMovieController.mockImplementationOnce(() => {
      return {
        search: jest.fn().mockResolvedValueOnce({})
      }
    });
    request(app)
      .get("/search?query=a")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the GET /detail with id method", done => {
    (MockedMovieController as jest.Mock).mockImplementationOnce(() => {
      return {
        detail: jest.fn().mockResolvedValueOnce({})
      }
    });
    request(app)
      .get("/detail?id=13132")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });


  test("It should failed when GET /search without query", done => {
    (MockedMovieController as jest.Mock).mockImplementation(() => {
      return {
        search: jest.fn().mockRejectedValueOnce(new BadRequestException())
      }
    });
    request(app)
      .get("/search")
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test("It should failed when GET /detail without id", done => {
    MockedMovieController.mockImplementation(() => {
      return {
        detail: jest.fn().mockRejectedValueOnce(new BadRequestException())
      }
    });
    request(app)
      .get("/detail")
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
});