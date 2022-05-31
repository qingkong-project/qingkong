import { Crud, CrudController } from '@nestjsx/crud'
// import { CodeHouse } from '../entities/code-house.entity'
// import { CodeHouseCrudService } from '../service/crud/code-house.crud.service'
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common'
import { Note } from '../entities/note.entity'
import { NoteCrudService } from '../service/crud/note.crud.service'
import { NoteService } from '../note.service'

@Crud({
  model: {
    type: Note,
  },
})
@Controller('')
export class NoteController implements CrudController<Note> {
  constructor(
    public service: NoteCrudService,
    public noteService: NoteService,
  ) {}

  @Get('/:noteId')
  async t(@Param() params) {
    return this.noteService.retrieveANote({ noteId: Number(params.noteId) })
  }

  @Post('/publishComment')
  async publishComment(
    @Request() request: { user: { id: number } },
    @Body() params,
  ) {
    return this.noteService.publishComment(request.user.id, params)
  }

  @Post('/retrieveANoteComments')
  async retrieveANoteComments(
    @Request() request: { user: { id: number } },
    @Body() params,
  ) {
    return this.noteService.retrieveANoteComments(request.user.id, params)
  }

  @Post('/test')
  async publishANote(@Body() params) {
    return this.noteService.publishANote(params)
  }

  @Get('/random')
  async randomGetANote(@Query() params) {
    return this.noteService.randomGetANote(params)
  }

  @Post('/r')
  async r(@Body() params) {
    // console.log(params,'params')
    return this.noteService.r(params)
  }

  // 管理系统的接口

  @Post('/listNote')
  async listNote(@Body() params) {
    return this.noteService.listNote(params)
  }

  @Post('/retrieveANote')
  async retrieveANote(@Body() params) {
    return this.noteService.retrieveANote(params)
  }

  @Post('/createANote')
  async createANote(@Body() params) {
    return this.noteService.createANote(params)
  }

  @Post('/updateANote')
  async updateANote(@Body() params) {
    return this.noteService.updateANote(params)
  }
}
