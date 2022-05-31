import { DatabaseModule } from '../database/database.module'
import { NoteService } from './note.service'
import { NoteCrudService } from './service/crud/note.crud.service'
import { Module } from '@nestjs/common'
import { noteProviders } from './providers/note.providers'
import { NoteController } from './controller/note.controller'
import { StarController } from './controller/star.controller'
import { StarCrudService } from './service/crud/star.crud.service'

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController, StarController],
  providers: [
    NoteService,
    NoteCrudService,
    StarController,
    StarCrudService,
    ...noteProviders,
  ],
})
export class NoteModule {}
