import * as React from 'react'
import avatar from './assets/avatar.jpg'
import { Props as LinkType } from './components/Link'
import { BasicsType } from './components/Layout'
import { Layout, Card, Label, Link, Job } from './components'

const socialLinks: LinkType[] = [
  { href: 'https://juejin.cn/user/4372092371864984/posts', title: '掘金链接', label: '目前已有 70 篇技术博客，文章被阅读量 1.5w+', direction: 'right' },
  { href: 'https://github.com/heycn', title: 'GitHub 链接', label: '我的 GitHub 过去一年有 2000 次 commit', direction: 'right' }
]
const contacts = {
  wechat: 'heycn1',
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
      socialLinks={socialLinks}
    >
      <Card title='关于我'>
        <Label>
          JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript
          是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
          {/* 平时喜欢写一些有趣的项目，包括这份简历，是我使用 React + TSX + Unocss 写的 */}
        </Label>
      </Card>
      <Card title='工作经验'>
        <Job
          company='阿里巴巴'
          startTime='2020.07'
          endTime='至今'
          jobTitle='前端工程师'
          location= '杭州'
          details={[
            '你好你好，我**加粗了**，我**又加粗**了',
            '你好你好，我没加粗'
          ]}/>
      </Card>
      <Card title='项目经验'>
      </Card>
    </Layout>
  )
}
