import * as React from 'react'
import { convert } from '../lib/convert'
import { Label } from './'

export const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
  <Label>
    <ul p-l-6 p-t-2 >
      {skills.map((d, i) => (
        <li key={i}>{convert(d)}</li>
      ))}
    </ul>
  </Label>
)
