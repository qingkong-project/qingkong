import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('user')
export class User extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '用户名',
    name: 'username',
  })
  username: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '邮箱',
  })
  email: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '手机',
  })
  phone: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '密码',
  })
  password: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '语言',
  })
  lang: string

  @Column({
    type: 'varchar',
    default: '',
    comment: '角色',
  })
  role: string

  @Column({
    type: 'int',
    default: 0,
    comment: '是否激活',
  })
  activate: number

  @Column({
    type: 'varchar',
    default: '',
    comment: '昵称',
  })
  nickname: string
}
