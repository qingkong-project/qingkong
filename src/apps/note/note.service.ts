import { Inject, Injectable } from '@nestjs/common'
import { Note } from './entities/note.entity'
import { Comment } from './entities/comment.entity'
import { Repository } from 'typeorm'
import Client from '../../utils/sms'
import { User } from '../user/entities/user.entity'

@Injectable()
export class NoteService {
  constructor(
    @Inject('DATABASE_CONNECTION_NoteRepository')
    private noteRepository: Repository<Note>,
    @Inject('DATABASE_CONNECTION_CommentRepository')
    private commentRepository: Repository<Comment>,
  ) {}

  // 测试数据
  async retrieveANote(params) {
    return this.noteRepository.findOne({ id: params.noteId })
  }

  async publishComment(currentUser: number, params) {
    return this.commentRepository.insert({
      ...params,
      commentator: currentUser,
    })
  }

  async retrieveANoteComments(currentUser: number, params) {
    const { beNoteId } = params
    const allCom = await this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.be_note_id = :id', { id: beNoteId })
      .leftJoinAndSelect(User, 'user', 'user.id=comment.commentator')
      .leftJoinAndSelect(
        Comment,
        'reply_comment',
        'reply_comment.id=comment.reply_comment_id',
      )
      .leftJoinAndSelect(
        User,
        'reply_comment_user',
        'reply_comment_user.id=reply_comment.commentator',
      )
      .select([
        'comment.id as commentId',
        'comment.content as content',
        'comment.reply_comment_id as replyCommentId',
        'comment.dingceng_reply_comment_id as dingcengReplyCommentId',
        'user.nickname as commentatorNickname',
        'reply_comment_user.nickname as replyCommentUserNickname',
      ])
      .getRawMany()
    const allTop = allCom
      .filter((item) => item.replyCommentId === -1)
      .map((item) => ({
        ...item,
        replyComments: [],
      }))


    // 这里的计算有问题，他计算出来的都是回复顶层楼的回复，还需要一个计算出来的那个字段定义为dingcengReplyCommentId
    for (let i = 0; i < allCom.length; i++) {
      for (let j = 0; j < allTop.length; j++) {
        console.log(allTop[j].commentId , allCom[i].dingcengReplyCommentId)
        if (allTop[j].commentId === allCom[i].dingcengReplyCommentId) {
          allTop[j].replyComments.push(allCom[i])
        }
      }
    }

    return allTop
  }

  // 发表一篇
  async publishANote(params) {
    return this.noteRepository.insert(params)
  }

  async randomGetANote(params) {
    // const alls = this.noteRepository.find(params).
    return this.noteRepository.findOne(params)
  }

  async sms() {
    return Client.main([])
  }

  async r(params) {
    console.log(params, 'params')
    let qb = this.noteRepository.createQueryBuilder('ticket')
    qb = qb.skip(params.pageSize * (params.current - 1)).take(params.pageSize)

    return await qb.getManyAndCount()
  }


  async listNote(params) {
    return this.noteRepository.find()
  }

  async createANote(params) {
    return this.noteRepository.insert(params)
  }

  async updateANote(params) {
    const copyParams = JSON.parse(JSON.stringify(params))
    delete copyParams.noteId
    return this.noteRepository.update({id:params.noteId},copyParams)
  }
}
