import * as React from 'react'
import avatar from './assets/avatar.jpg'
import { Props as LinkType } from './components/Link'
import { BasicsType } from './components/Layout'
import { Layout, Card, Label, Link, Job, Skills } from './components'

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
const lhcJobDetails = [
  // TODO
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
]
const bsJobDetails = [
  // TODO:重写/过于啰嗦
  '负责**前端项目的开发、维护与迭代**，包括 PC 端与**移动端**、主要使用**React/Vue3/TypeScript**',
  '负责全部门 UI 框架的开发，包括对话框、树形组件、日期选择器等常用组件',
  '定期组织内部分享，包括**Vim 的使用、ECMAScript 新特性、TypeScript**等话题',
]
const neteaseJobDetails = [
  '负责团队**工具开发，游戏界面拼接、UI 动画制作**',
  '负责 UI 资源库**管理、测试、优化与维护**，制作流程文档撰写'
]
const palJobDetails = [
  '担任：思想骨干、副班长、风气监督员',
  '荣获：优秀士兵、年度嘉奖、三等功班、训练标兵、比武第一名'
]

const skills = [
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
]

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
      <Card
        title='关于我'
        aboutMe='
          My name is Anthony Fu, a master of computer science student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
        '
        // 平时喜欢写一些有趣的项目，包括这份简历，是我使用 React + TSX + Unocss 写的
      />
      <Card title='工作经历'>
        <Job
          company='令狐充' jobTitle='前端工程师/负责人'
          startTime='2022.10' endTime='至今'
          location= '中山' details={lhcJobDetails}
        />
        <Job
          company='博森科技' jobTitle='前端工程师'
          startTime='2022.03' endTime='2022.10'
          location= '广州' details={bsJobDetails}
        />
        <Job
          company='网易游戏' jobTitle='游戏前端｜UI'
          startTime='2021.03' endTime='2022.03'
          location= '广州' details={neteaseJobDetails}
        />
        <Job
          company='中国人民解放军' jobTitle='战士'
          startTime='2018.09' endTime='2020.12'
          details={palJobDetails}
        />
      </Card>
      <Card title='技能'>
        <Skills skills={skills} />
      </Card>
    </Layout>
  )
}
