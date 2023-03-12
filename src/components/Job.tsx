import * as React from 'react'
import { Label } from '.'

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
          <span className='c-#777 m-l-0.3em'>{jobTitle}</span>
        </div>
        <div>
          <span className='c-#777 text-size-0.85em'>{timeAndlocation}</span>
        </div>
      </Label>
      <ul>
        {details.map((detail, index) => {
          const strongText = detail.match(/\*\*(.*?)\*\*/g),
                strongTextList = strongText ? strongText.map(item => item.replace(/\*\*/g, '')) : [],
                textList = detail.split(/\*\*(.*?)\*\*/g)
          return (
            <li key={index}>
              {textList.map((text, index) => {
                if (strongTextList.includes(text)) {
                  return <strong key={index}>{text}</strong>
                }
                return <span key={index}>{text}</span>
              })}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
