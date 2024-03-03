import { BaseRepository } from 'src/core/classes/repository.base';
import { Semester } from './entities/semester.entity';

export class SemesterRepository implements BaseRepository<Semester> {
  getAll: () => Promise<Semester[]>;
  create: (item: Semester) => Promise<Semester>;
  getById: (id: string) => Promise<Semester>;
  update: (id: string, item: Semester) => Promise<Semester>;
  delete: (id: string) => Promise<Semester>;
}
