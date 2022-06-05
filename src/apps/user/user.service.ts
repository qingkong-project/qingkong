import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject('user_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  myInfo(currentUser: number) {
    return this.userRepository.findOne({ id: currentUser });
  }

  // 登陆接口！！！
  async passwordLogin({ username, password }) {
    const user = await this.userRepository.find({
      password,
      username,
      activate: 1,
    });
    if (user.length > 0) {
      return user[0];
    } else {
      throw new HttpException(
        { statusCode: HttpStatus.FORBIDDEN, message: "账号密码错误" },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  // 通过token获取用户信息
  async getPersonalInfoThroughToken(currentUser: number) {
    return this.userRepository.findOne({ id: currentUser });
  }

  // 修改用户信息
  async modifyUserinfo(currentUser: number, params) {
    return this.userRepository.update({ id: currentUser }, params);
  }
}
