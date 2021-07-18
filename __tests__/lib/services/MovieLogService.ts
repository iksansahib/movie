import axios from "axios";
import { mock } from 'jest-mock-extended';
import { getCustomRepository, Repository, SelectQueryBuilder } from "typeorm";
import MovieLogService from "../../../lib/services/MovieLogService";

jest.mock('typeorm', () => {
  const repositoryMock = mock<Repository<any>>();
  const qbuilderMock = mock<SelectQueryBuilder<any>>();
  qbuilderMock.where.mockReturnThis();
  qbuilderMock.select.mockReturnThis();
  repositoryMock.createQueryBuilder.mockReturnValue(qbuilderMock);

  return {
    getCustomRepository: () => repositoryMock,
    BaseEntity: class Mock { },
    ObjectType: () => { },
    Entity: () => { },
    InputType: () => { },
    Index: () => { },
    PrimaryGeneratedColumn: () => { },
    Column: () => { },
    CreateDateColumn: () => { },
    UpdateDateColumn: () => { },
    OneToMany: () => { },
    ManyToOne: () => { },
    Repository: null,
    EntityRepository: () => { }
  }
});
describe("Test the movie log repo", () => {
  test("It should insert to db", async () => {
    const movieLogService = new MovieLogService();
    const result = await movieLogService.insert("abc", "q");
    expect(result).toBeTruthy();
  });

});

