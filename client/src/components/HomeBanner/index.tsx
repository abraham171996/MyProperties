import React from 'react'
import HomeTop from './HomeTop'
import styles from '../../pages/Home/home.module.scss'
import HomeCards from './HomeCards'
const HomeBanner : React.FC= () => {
  return (
    <div className={styles.HomeBanner}>
        <HomeTop/>
        <HomeCards/>
    </div>
  )
}

export default HomeBanner