import * as React from 'react'

export type Props = {
  title: string | number
  direction?: 'left' | 'right'
  label?: string | number
  href: string
  strong?: boolean
}

export const Link: React.FC<Props> = ({
  title, direction = 'left',
  label, href, strong = true
}) => (
  <span>
    {direction === 'right' && <span m-r-8px>{label}</span>}
    {strong ? (
      <strong>
        <a href={href} target='_blank' b-b-dashed className='b-#0005'>
          {title}
        </a>
      </strong>
    ) : (
      <a href={href} target='_blank' b-b-dashed className='b-#0005'>
        {title}
      </a>
    )}
    {direction === 'left' && <span m-l-8px>{label}</span>}
  </span>
)
