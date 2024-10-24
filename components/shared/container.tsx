import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const {children} = props
  return (
    <div className='px-8 py-16 md:px-40 md:py-16 max-w-3xl mx-auto'>
      {children}
    </div>
  )
}

export default Container
