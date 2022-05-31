import * as Mock from 'mockjs'

export const test = () => {
  return {
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    title: Mock.Random.cparagraph(2),
    content: Mock.Random.cparagraph(2),
    reference: Mock.Random.cparagraph(2),
    author: Mock.Random.cname(),
    occupation: Mock.Random.cparagraph(2),
  }
}
