import React from 'react'
import SideBar from '../../components/SideBar'
import TenancyBanner from '../../components/TenancyBanner'

const TenancyApplications:React.FC = () => {
  return (
    <section id='TenancyApplications'>
        <SideBar/>
        <TenancyBanner/>
    </section>
  )
}

export default TenancyApplications