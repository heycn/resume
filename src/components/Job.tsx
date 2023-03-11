import * as React from 'react'
import { Label } from '.'

type Props = {
  children?: React.ReactNode
  company: string
  startTime: string
  endTime: string
  jobTitle: string
  location?: string
}

export const Job: React.FC<Props> = ({
  children, company, startTime,
  endTime, jobTitle, location
}) => {
  const hasLocation = location ? ` | ${location}` : ``
  const timeAndlocation = `${startTime} - ${endTime}${hasLocation}`

  return (
    <>
      <Label>
        <div>
          <span c-black font-900>{company}</span>
          <span className='c-#777 m-l-0.3em'>{jobTitle}</span>
        </div>
        <div>
          <span className='c-#777'>{timeAndlocation}</span>
        </div>
      </Label>
      {children}
      {/* <ul c-black p-l-1em>
        <li></li>
      </ul> */}
    </>
  )
}
