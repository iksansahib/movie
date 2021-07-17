import request from "supertest";
import app from "../app";

describe("Test the root path", () => {
  test("It should response the GET /search with query method", done => {
    request(app)
      .get("/search?query=a")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the GET /detail with id method", done => {
    request(app)
      .get("/detail?id=13132")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should failed when GET /search without query", done => {
    request(app)
      .get("/search")
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test("It should failed when GET /detail without id", done => {
    request(app)
      .get("/detail")
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

});