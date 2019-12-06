import send from '../config/MailConfig'
import moment from 'moment'

class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request
    console.log(body)
    try {
      // body.username -> database -> email
      let result = await send({
        code: '1234',
        expire: moment()
          .add(30, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Brian',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {
      console.log(e)
    }
  }
  async login(ctx) {
    // 获取用户信息
    // 验证CODE 时效性及对应性
    // 验证用户名及密码
    // 返回数据
  }
}

export default new LoginController()
