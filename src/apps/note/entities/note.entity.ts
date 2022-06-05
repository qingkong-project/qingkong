import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('note')
export class Note extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: 'title',
    name: 'title',
  })
  title: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: 'content',
    name: 'content',
  })
  content: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: 'reference',
    name: 'reference',
  })
  reference: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: 'author',
    name: 'author',
  })
  author: string;

  @Column({
    type: 'int',
    default: 0,
    comment: 'creator',
    name: 'creator',
  })
  creator: number;

  // 0 审核中 1审核通过 2 审核未通过
  @Column({
    type: 'int',
    default: 0,
    comment: 'status'
  })
  status: number;

  @Column({
    type: 'varchar',
    default: '',
    comment: 'occupation',
    name: 'occupation',
  })
  occupation: string;
}
