import { extend, localize } from 'vee-validate';
import {
  required,
  email,
  min,
  length,
  confirmed,
  max
} from 'vee-validate/dist/rules';
import zh from 'vee-validate/dist/locale/zh_CN.json';

extend('email', email)
extend('required', required)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)
extend('max', max)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}',
    confirmed: '两次{_field_}不一致'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码',
    repassword: '密码'
  }
})
