import React, { PropsWithChildren } from 'react'
import NavBar from './_components/NavBar'

const DashboardLayout = ({children}: PropsWithChildren) => {
  return (
    <div className='h-full'>
        <NavBar />
        {children}</div>
  )
}

export default DashboardLayout