import errorHandling from "../../../lib/utils/errorHandling";
import { BadRequestException, HttpException } from "../../../lib/utils/exceptions";

describe('Test errorHandling function', () => {
  it('should return status based on the exception', () => {
    const result = errorHandling(new BadRequestException("bad request"));
    expect(result).toEqual({ statusCode: 400, message: "bad request" });

    const resultHttp = errorHandling(new HttpException("http error"));
    expect(resultHttp).toEqual({ statusCode: 500, message: "http error" });

    const resultUnknown = errorHandling(new Error("unknown"));
    expect(resultUnknown).toEqual({ statusCode: 500, message: "unknown" });
  })
})