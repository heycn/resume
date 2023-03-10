import * as React from 'react'
import { Link } from './Link'
import { Props as LinkType } from './Link'

type Props = {
  children?: React.ReactNode
  avatar: string
  fullName: string
  basics: string[]
  contacts: string[]
  socialLinks?: LinkType[]
  linkStrong?: boolean
}

const Avatar: React.FC<{ src: string }> = ({ src }) => (
  <div flex justify-center items-center w-35mm h-45mm overflow-hidden>
    <img src={src} w-auto h-full object-cover />
  </div>
)

export const Layout: React.FC<Props> = ({
  avatar, children, fullName, linkStrong,
  basics, contacts, socialLinks
}) => (
  <article className='w-21cm b-black b-1 min-h-29.7cm p-1em'>
    <header flex>
      <Avatar src={avatar} />
      <section m-l-2em flex flex-col justify-between>
        <h1 c-black fw-900 text-size-2em>{fullName}</h1>
        <p>{basics?.join(' | ')}</p>
        <p>{contacts?.join(' | ')}</p>
        {socialLinks?.map(s => (
          <p>
            <Link title={s.title} href={s.href} direction={s?.direction} label={s?.label} strong={linkStrong} />
          </p>
        ))}
      </section>
    </header>
    {children}
  </article>
)
