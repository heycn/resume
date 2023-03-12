import * as React from 'react'
import { convert } from '../lib/convert'
import { Label } from '.'

type Props = {
  children?: React.ReactNode
  title: string
  titleType?: 'default' | 'line'
  aboutMe?: string
}

export const Card: React.FC<Props> = ({ children, title, titleType = 'default', aboutMe }) => {
  return (
    <section m-t-3 m-b-3>
      {/* DefaultTitle */}
      {titleType === 'default' && (
        <h4 m-t-6 m-b-2 fw-600 text-size-17px>
          <span bg-black c-white p-t-2px p-r-10px p-b-0 p-l-4px>
            {title}
          </span>
        </h4>
      )}
      <div p-l-1>
        {aboutMe
          ? <div p-l-2 p-t-1 >
              <Label>{convert(aboutMe)}</Label>
            </div>
          : children
        }
      </div>
    </section>
  )
}
