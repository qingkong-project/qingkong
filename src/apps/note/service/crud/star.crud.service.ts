import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Note } from '../../entities/note.entity'
import { Star } from '../../entities/star.entity'
// import { Coverage } from '../../entities/coverage.entity'

@Injectable()
export class StarCrudService extends TypeOrmCrudService<Star> {
  constructor(@InjectRepository(Star, 'DATABASE_CONNECTION') repo) {
    super(repo)
  }
}
