import React from 'react'
import styles from './rentalDetails.module.scss'
import RentalBanner from './RentalBanner'
import AvailableRooms from './Available'
import Tenants from './Tenants'
import Properties from './Properties'
const RentalDetails : React.FC= () => {
  return (
    <div className={styles.rentalDetails}>
      <div className={styles.rentalDetails__left}>
        <Properties/>
        </div>
      <div className={styles.rentalDetails__right}>
      <RentalBanner/>
        <div className={styles.rentalDetails__additional}>
        <AvailableRooms/>
        <Tenants/>
        </div>
      </div>
        
    </div>
  )
}

export default RentalDetails