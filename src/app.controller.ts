import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import { Public } from "./apps/role/decorator/public.decorator";
import { AuthService } from "./apps/auth/auth.service";
import { LocalAuthGuard } from "./apps/auth/guards/local-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('/vi/health')
  @Public()
  health(): string {
    return "366ms";
  }

  @Get('/base/info')
  @Public()
  version(): any {
    return {
      version: `v${global.version}`,
      docUrl: `${global.conf.base.docUrl}`,
    };
  }
  // 颁发token的接口，其他接口要用，直接用axios请求
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req, @Body() authLoginDto: any) {
    return this.authService.login(req.user);
  }
}
