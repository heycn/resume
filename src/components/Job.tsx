import * as React from 'react'
import { Label } from '.'
import { convert } from '../lib/convert'

type Props = {
  company: string
  startTime: string
  endTime: string
  jobTitle: string
  location?: string
  details: string[]
}

export const Job: React.FC<Props> = ({
  company, startTime, endTime,
  jobTitle, details
}) => {
  const workTime = `${startTime} - ${endTime}`

  return (
    <div className='p-t-1.5 p-b-1.5'>
      <Label>
        <div flex justify-between >
          <div>
            <strong>{company}</strong>
            <span className='c-#777 m-l-.5em text-size-.9em'>{jobTitle}</span>
          </div>
          <span className='c-#777 text-size-.9em'>{workTime}</span>
        </div>
      </Label>
      <ul>
        {details.map((d, i) => <li key={i} p-l-2 >{convert(d)}</li>)}
      </ul>
    </div>
  )
}
