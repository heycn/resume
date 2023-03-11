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
        <h4 m-t-6 m-b-2 fw-600 text-size-18px >
          <span bg-black c-white p-l-1 p-r-2 p-t-1 p-b-1>
            {title}
          </span>
        </h4>
      )}
      {/* LineTitle */}
      {/* <h2>
        <span>SimpleTitle</span>
      </h2> */}
      <div p-l-1em>
        {children}
      </div>
    </section>
  )
}
