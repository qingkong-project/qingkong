import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Note } from "../../entities/note.entity";
// import { Coverage } from '../../entities/coverage.entity'

@Injectable()
export class NoteCrudService extends TypeOrmCrudService<Note> {
  constructor(@InjectRepository(Note, 'DATABASE_CONNECTION') repo) {
    super(repo);
  }
}
