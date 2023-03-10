import * as React from 'react'
import { Layout } from './components/Layout'
import avatar from './assets/avatar.jpg'
import { Props } from './components/Link'
import { Card } from './components/Card'
import { Label } from './components/Label'
import { BasicsType } from './components/Layout'
import {Link} from './components/Link'

const socialLinks: Props[] = [
  { href: 'https://juejin.cn/user/4372092371864984/posts', title: '掘金', label: '我目前已有 70 篇技术博客，被阅读量 1.5w+', direction: 'right' },
  { href: 'https://github.com/heycn', title: 'GitHub', label: '我的 GitHub 过去一年有 2000 次 commit', direction: 'right' },
  { href: 'https://heycn.github.io/', title: 'heycn.github.io', label: '我的个人博客网站', direction: 'right' }
]
const contacts = {
  wechat: 'heycn',
  phone: '18888888888',
  email: 'heycn@foxmail.com'
}
const basics: BasicsType = {
  jobTitle: '前端开发工程师',
  birthYear: 2000,
  gender: 'male'
}

export const App: React.FC = () => {
  return (
    <Layout
      fullName='陈楠'
      jobTitle='前端开发工程师'
      contacts={contacts}
      avatar={avatar}
      basics={basics}
    >
      <Card title='关于我'>
        <Label>

        </Label>
      </Card>
    </Layout>
  )
}
