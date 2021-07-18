import request from "supertest";
import app from "../app";
import MovieController from "../lib/controllers/MovieController";
import { BadRequestException, HttpException } from "../lib/utils/exceptions";

jest.mock('./../lib/controllers/MovieController', () => jest.fn());
describe("Test the root path (200 status code)", () => {
  test("It should response the GET /search with query method", done => {
    (MovieController as jest.Mock).mockImplementationOnce(() => {
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
    (MovieController as jest.Mock).mockImplementationOnce(() => {
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
    (MovieController as jest.Mock).mockImplementation(() => {
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
    (MovieController as jest.Mock).mockImplementation(() => {
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