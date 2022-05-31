import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('star')
export class Star extends CommonBaseEntity {
  // 0：笔记 1 评论
  @Column({
    type: 'int',
    default: 0,
    comment: '被点赞类型',
    name: 'stared_type',
  })
  staredType: number

  @Column({
    type: 'int',
    default: 0,
    comment: '被点赞的id',
    name: 'stared_id',
  })
  staredId: number

  @Column({
    type: 'int',
    default: 0,
    comment: '点赞人',
    name: 'starer',
  })
  starer: number
}
