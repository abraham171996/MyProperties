import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowLeft,MdKeyboardArrowDown} from 'react-icons/md'
import styles from '../../../pages/Home/home.module.scss'
import top from '../../../assets/svg/top.svg'
import windo from '../../../assets/svg/windo.svg'
import hamburger from '../../../assets/svg/hamburger.svg'
import SkeletonLoader from '../../SkeletonLoader'
import 'react-loading-skeleton/dist/skeleton.css';
const HomeTop:React.FC = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
          setShowSkeleton(false);
        }, 1500);
    
    
        return () => clearTimeout(timer);
      }, []); 
  return (
    <div className={styles.HomeTop}>
       {
        showSkeleton?(
            <SkeletonLoader width={250} height={30}/>
        ):(
            <Link to='/'>
            <MdOutlineKeyboardArrowLeft/>
                <p>Back to rental portfolio</p>
               
            </Link> 
        )
       }
        {
            showSkeleton ? (
                <SkeletonLoader style={{marginTop:"20px"}} width={'100%'} height={56}/>
            ):(
                <div className={styles.subMenu}>
            <div className={styles.subMenu__left}>
                <div className={styles.showAll}>
                    <p>Showing all</p>
                    <MdKeyboardArrowDown/>
                </div>
            </div>
            <div className={styles.subMenu__right}>
            <div className={styles.date}>
                    <p>By date added</p>
                    <MdKeyboardArrowDown/>
                </div>
            <figure>
                <img src={top} alt="" />
            </figure>
            <figure className={styles.windo}>
                <img src={windo} alt="" />
            </figure>
            <figure className={styles.alt4}>
                <img src={hamburger} alt="" />
            </figure>
            </div>
        </div>
            )
        }
    </div>
  )
}

export default HomeTop