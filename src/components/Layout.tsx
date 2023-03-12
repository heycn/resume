import * as React from 'react'
import icon_wechat from '../assets/wechat.svg'
import icon_phone from '../assets/phone.svg'
import icon_email from '../assets/email.svg'
import { Link} from '.'
import { Props as LinkType } from './Link'
import { convert } from '../lib/convert'

export type BasicsType = {
  jobTitle: string
  birthYear: number
  gender: 'male' | 'female' | 'trans-female' | 'trans-male' | 'LGBTQ+'
  other?: string
}

type Props = {
  children?: React.ReactNode
  avatar: string
  fullName: string
  linkStrong?: boolean
  jobTitle: string
  contacts: {
    wechat: string
    phone: number | string
    email: string
  }
  basics: BasicsType
  other?: string[]
}

const genderMap = {
  'male': '男',
  'female': '女',
  'trans-female': '女变性人',
  'trans-male': '男变性人',
  'LGBTQ+': 'LGBTQ+'
}

const Avatar: React.FC<{ src: string }> = ({ src }) => (
  <div flex justify-center items-center w-35mm h-35mm overflow-hidden>
    <img src={src} w-auto h-full object-cover />
  </div>
)

export const Layout: React.FC<Props> = ({
  avatar, children, fullName, other,
  basics: b, contacts: c,
}) => {
  const contactList = [
    { icon: icon_wechat, value: c.wechat },
    { icon: icon_phone, value: c.phone },
    { icon: icon_email, value: <Link href={`mailto:${c.email}`} title={c.email} strong={false} />}
  ]
  const basicsList = [b.jobTitle, `${new Date().getFullYear() - b.birthYear}岁`, genderMap[b.gender], b.other]

  return (
    <article className='bg-white w-210mm min-h-297mm p-8 p-r-10 p-b-0'>
      <header flex items-center p-b-5>
        <Avatar src={avatar} />
        <section h-35mm m-l-2em flex flex-col justify-between>
          <h1 c-black fw-900 text-size-2em>{fullName}</h1>
          <div>
            <p>{basicsList.join(' | ')}</p>
            <p className='h-1.5em flex items-center'>
              {contactList.map((c, i) => (
                <span key={i} flex items-center m-r-1em>
                  <img src={c.icon} h-4 m-r-1 />
                  {c.value}
                </span>
              ))}
            </p>
            {other?.map((o, i) => (
              <p key={i} className='h-1.5em'>{convert(o)}</p>
            ))}
          </div>
        </section>
      </header>
      <main>
        {children}
      </main>
    </article>
  )
}
