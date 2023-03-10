import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export const Label: React.FC<Props> = ({ children }) => {
  return (
    <p itemProp='description' p-b-2 p-t-2 break-words>
      {children}
    </p>
  )
}
