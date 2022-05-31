// This file is auto-generated, don't edit it
import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525'
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'

export default class Client {
  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(
    accessKeyId: string,
    accessKeySecret: string,
  ): Dysmsapi20170525 {
    const config = new $OpenApi.Config({
      // 您的AccessKey ID
      accessKeyId: 'LTAI4Fg7VKZKdhdW57jnMiZa',
      // 您的AccessKey Secret
      accessKeySecret: '9VfhbAgKruuBN5CBA3O0UZ9j4F6mup',
    })
    // 访问的域名
    config.endpoint = `dysmsapi.aliyuncs.com`
    return new Dysmsapi20170525(config)
  }

  static async main(args: string[]): Promise<void> {
    const client = Client.createClient('accessKeyId', 'accessKeySecret')
    const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
      signName: '阿里云短信测试',
      templateCode: 'SMS_154950909',
      phoneNumbers: '13955457041',
      templateParam: '{"code":"0217"}',
    })
    // 复制代码运行请自行打印 API 的返回值
    await client.sendSms(sendSmsRequest)
  }
}
