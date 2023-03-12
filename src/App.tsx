import * as React from 'react'
import avatar from './assets/avatar.jpg'
import { Props as LinkType } from './components/Link'
import { BasicsType } from './components/Layout'
import { Layout, Card, Job, Skills } from './components'

const aboutMe = `
  退役军人，超过 ${new Date().getFullYear() - 2021} 年的前端开发经验，同时也懂一些后端与设计，完全具备独立开发能力<br/>
  具有 Geek 精神，爱折腾，比如精通 Vim、双拼。爱学习，有写博客的习惯，目前已有 70 篇技术博客<br/>
  业余喜欢在 GitHub 写一些有趣的项目，包括这份简历，是我使用 React + TSX + Unocss 写的
`
const other = [
  `写过 70 篇技术博客，被阅读量 1.5万+ [掘金链接](https://juejin.cn/user/4372092371864984/posts) | [个人网站](https://heycn.github.io/)`,
  `我的 GitHub 过去一年有 2000 次 commit [GitHub 链接](https://github.com/heycn)`
]
const contacts = {
  wechat: 'heycn1',
  phone: '18888888888',
  email: 'heycn@foxmail.com'
}
const basics: BasicsType = {
  jobTitle: '前端工程师',
  birthYear: 2000,
  gender: 'male',
  other: '退役军人'
}
const lhcJobDetails = [
  // TODO
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
]
const bsJobDetails = [
  // TODO:重写/过于啰嗦
  '独立负责部门**前端开发**与**技术文档撰写**，主要使用**React/Vue3/TypeScript**',
  '负责部门 UI 框架开发，包括 Tab、**轮播组件**、**进度条**、**树形组件**、**日期选择器** 等常用组件',
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
  '拥有 独立开发项目 的能力，以及良好的 编码品味，善于业务 组件的封装，便于复用',
  '熟悉并且能够编写 语义化的 HTML，模块化的 CSS，包括 SASS / LESS',
  '掌握 TypeScript 的使用，熟悉 ECMAScript 新特性，我把常用的特性总结成一篇 博客',
  '掌握 React 全家桶 的使用，包括 create-react-app、styled-component、ReactRouter、SWR 等',
  '掌握 Vue 的使用，包括 Vue3、VueCli、VueRouter、Vuepress 等',
  '了解 前后端分离 技术，包括 AJAX、同源策略、MVC、HTTP、Session、Cookie 等',
  '了解 Vite、Webpack 的配置，在项目中我写过一个 Vite 插件，并将其思路总结成一篇 博客',
  '工具类：Vim、Git、SVN、Markdown、Zsh、Figma'
]

export const App: React.FC = () => {
  return (
    <Layout
      fullName='陈楠'
      jobTitle='前端开发工程师'
      contacts={contacts}
      avatar={avatar}
      basics={basics}
      other={other}
    >
      <Card title='关于我' aboutMe={aboutMe} />
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
          company='网易' jobTitle='游戏前端｜UI'
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
