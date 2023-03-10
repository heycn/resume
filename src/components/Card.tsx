import * as React from 'react'

type Props = {
  children?: React.ReactNode
  title: string
  titleType?: 'default' | 'line'
}

export const Card: React.FC<Props> = ({ children, title, titleType = 'default' }) => {
  return (
    <section m-t-3 m-b-3>
      {/* DefaultTitle */}
      {titleType === 'default' && (
        <h3 m-t-6 m-b-3 fw-600>
          <span bg-black c-white p-l-1 p-r-2 p-t-1 p-b-1>
            {title}
          </span>
        </h3>
      )}
      {/* LineTitle */}
      {/* <h2>
        <span>SimpleTitle</span>
      </h2> */}
      {children}
    </section>
  )
}
