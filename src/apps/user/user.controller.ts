import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Public } from '../role/decorator/public.decorator'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('myInfo')
  myInfo(@Request() request: { user: { id: number } }) {
    return this.userService.myInfo(request.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('modifyUserinfo')
  modifyUserinfo(@Request() request: { user: { id: number } }, @Body() params) {
    console.log(request.user)
    return this.userService.modifyUserinfo(request.user.id, params)
  }


  @UseGuards(JwtAuthGuard)
  @Post('getPersonalInfoThroughToken')
  getPersonalInfoThroughToken(@Request() request: { user: { id: number } }) {
    return this.userService.getPersonalInfoThroughToken(request.user.id)
  }
}
