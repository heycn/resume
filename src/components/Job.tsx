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
    <div className='p-t-2.5 p-b-2'>
      <Label>
        <div>
          <div>
            <strong>{company}</strong>
            <span className='c-#777 m-l-.5em text-size-.9em'>{jobTitle}</span>
          </div>
          <span className='c-#777 text-size-.9em p-l-0.5'>{workTime}</span>
        </div>
      </Label>
      <ul>
        {details.map((d, i) => <li key={i} p-l-2 >{convert(d)}</li>)}
      </ul>
    </div>
  )
}
