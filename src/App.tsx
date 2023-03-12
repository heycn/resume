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
const lhcJobDetails = ['TODO']
const bsJobDetails = [
  // TODO:重写/过于啰嗦
  '独立负责部门**前端项目的开发与维护**，包括 PC 端与**移动端**、主要使用**React + TypeScript**开发',
  '负责**Web3、智能量化**相关项目的开发、重构、维护与迭代',
  '协同后端开发团队完成**接口对接和联调**，按时按量完成项目开发任务',
  '负责与产品组配合，深度参与产品需求讨论，功能定义等',
  '制定团队**代码规范**，建立起开发质量控制方法，有效提高前端团队的开发效率'
]
const neteaseJobDetails = [
  '负责团队**工具开发，前端界面的拼接、UI 动画制作**',
  '负责 UI 资源库**管理、迭代、测试、优化与维护**，制作流程文档撰写'
]
const palJobDetails = [
  '担任：思想骨干、副班长、风气监督员',
  '荣获：优秀士兵、年度嘉奖、三等功班、训练标兵、比武第一名'
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
      <Card title='关于我'>
        <Label>
          JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript
          是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
          {/* 平时喜欢写一些有趣的项目，包括这份简历，是我使用 React + TSX + Unocss 写的 */}
        </Label>
      </Card>
      <Card title='工作经验'>
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
          startTime='2018.09' endTime='2022.10'
          details={palJobDetails}
        />
      </Card>
      <Card title='项目经验'>
      </Card>
    </Layout>
  )
}
