import { NestFactory } from '@nestjs/core'
// import { AppModule } from './app.module'
import { prepareInit } from './utils/prepareInit'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as path from 'path'

async function bootstrap() {
  prepareInit()
  const { AppModule } = await import('./app.module')
  const app = await NestFactory.create(AppModule)

  // 用这种方法可以跳过鉴权
  //静态资源目录
  app.use(express.static(path.join(process.cwd(), './client')));

  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(function (req, res, next) {
    const old_url = req.url
    if (old_url.includes('/api')) {
      req.url = old_url.replace('/api', '')
    }
    next()
  })
  await app.listen(8080)
}
bootstrap()
