import * as React from 'react'
import { Layout } from './components/Layout'
import avatar from './assets/avatar.jpg'
import { Props } from './components/Link'

const basics: string[] = ['男', '23岁', '前端开发', '退役军人']
const contacts: string[] = ['电话: 123456789', '微信: heycn1', '邮箱: heycn@foxmail.com']
const socialLinks: Props[] = [
  { href: 'https://juejin.cn/user/4372092371864984/posts', title: '掘金', label: '我目前已有 70 篇博客，累计 15k+ 阅读量', direction: 'right' },
  { href: 'https://github.com/heycn', title: 'GitHub', label: '我的 GitHub 过去一年有 2000 次 commit', direction: 'right' },
  { href: 'https://heycn.github.io/', title: 'Website', label: '我的个人博客网站', direction: 'right' }
]

export const App: React.FC = () => {
  return (
    <Layout
      fullName='陈楠'
      avatar={avatar}
      basics={basics}
      contacts={contacts}
      socialLinks={socialLinks}
    >
    </Layout>
  )
}
