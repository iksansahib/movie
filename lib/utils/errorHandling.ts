import { BadRequestException, HttpException } from "./exceptions";

export default (e: any) => {
  // TODO: need to change this to advance logger package
  if (process.env.NODE_ENV != 'test') {
    console.log(e);
  }
  switch (e.constructor) {
    case BadRequestException:
      return { statusCode: 400, message: e.message };
    case HttpException:
      return { statusCode: 500, message: e.message };
    default:
      return { statusCode: 500, message: e.message };
  }
};