import React from 'react'
import SideBar from '../../components/SideBar'
import RentalDetails from '../../components/RentalDetails'

const RentalList : React.FC= () => {
  return (
    <section id='rentalList'>
        <SideBar/>
        <RentalDetails/>
    </section>
  )
}

export default RentalList