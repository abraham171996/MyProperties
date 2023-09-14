import React,{useState,useEffect} from 'react'
import styles from '../../RentalDetails/rentalDetails.module.scss'
import SkeletonLoader from '../../SkeletonLoader';
import 'react-loading-skeleton/dist/skeleton.css';
const AvailableRooms: React.FC = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
          setShowSkeleton(false);
        }, 1500);
    
    
        return () => clearTimeout(timer);
      }, []); 
    return (
        <div className={styles.AvailableRooms}>
            <div className={styles.AvailableRooms__top}>
                {
                    showSkeleton ? (
                    <SkeletonLoader width={150} height={30}/>):(
                        <h2>Available rooms</h2>
                    )
                }
                {
                    showSkeleton ? (
                    <SkeletonLoader width={170} height={30}/>):(
                <span>Total rooms available</span>)}
                {
                    showSkeleton ? (
                    <SkeletonLoader width={250} height={30}/>):(
                <div className={styles.empty}>
                    <div className={styles.fill}></div>
                </div>)}
                {
                    showSkeleton ? (
                    <SkeletonLoader width={450} height={30}/>):(
                <div className={styles.precent}>
                <p>2 rooms available of 4 rooms</p>
                <p>50%</p>
                </div>)}
            </div>
            {
                    showSkeleton ? (
                    <SkeletonLoader width={250} height={220}/>):(
            <div className={styles.AvailableRooms__center}>
                <h2>Description</h2>
                <span>Check out that Custom Backyard Entertaining space! 3237sqft,
                     4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the 
                     Palm Harbor neighborhood of Texas.
                </span>
                <p>Show more</p>
            </div>)}
            {
                    showSkeleton ? (
                    <SkeletonLoader width={450} height={50}/>):(
            <div className={styles.AvailableRooms__bottom}>
                <h2>Equipment</h2>
                <div className={styles.equipment}>
                    <p>Fitted Kitchen</p>
                    <p>Garden</p>
                    <p>Stepless Access</p>
                </div>
            </div>)}
        </div>
    )
}

export default AvailableRooms