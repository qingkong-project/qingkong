import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
// import { AppService } from './app.service'
import { JwtAuthGuard } from './apps/auth/guards/jwt-auth.guard'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from './apps/role/guard/roles.guard'
import { UserModule } from './apps/user/user.module'
import { AuthModule } from './apps/auth/auth.module'
import { NoteModule } from './apps/note/note.module'
import { join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [
    UserModule,
    AuthModule,
    NoteModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
