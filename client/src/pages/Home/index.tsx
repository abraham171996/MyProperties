import React from 'react'
import SideBar from '../../components/SideBar'
import HomeBanner from '../../components/HomeBanner'

const Home : React.FC= () => {
  return (
    <section id='home'>
      <SideBar/>
      <HomeBanner/>
    </section>
  )
}

export default Home