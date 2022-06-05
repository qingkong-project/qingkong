import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('comment')
export class Comment extends CommonBaseEntity {
  // 可以通过被回复评论的id反查到被回复人的id
  @Column({
    type: 'int',
    default: 0,
    comment: '被回复评论的id',
    name: 'reply_comment_id',
  })
  replyCommentId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '被回复评论的id',
    name: 'dingceng_reply_comment_id',
  })
  dingcengReplyCommentId: number;

  @Column({
    type: 'varchar',
    default: '',
    comment: '评论内容',
  })
  content: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '被评论的笔记id',
    name: 'be_note_id',
  })
  beNoteId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '评论人',
  })
  commentator: number;
}
