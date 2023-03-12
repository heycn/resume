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
  jobTitle, location, details
}) => {
  const hasLocation = location ? ` | ${location}` : ``
  const timeAndlocation = `${startTime} - ${endTime}${hasLocation}`

  return (
    <div p-t-3 p-b-3>
      <Label>
        <div>
          <strong>{company}</strong>
          <span className='c-#777 m-l-.5em'>{jobTitle}</span>
        </div>
        <div>
          <span className='c-#777 text-size-.85em'>{timeAndlocation}</span>
        </div>
      </Label>
      <ul>
        {details.map(d => convert(d))}
      </ul>
    </div>
  )
}
