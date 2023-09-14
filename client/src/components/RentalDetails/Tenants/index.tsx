import React, { useEffect, useState } from 'react'
import styles from '../../RentalDetails/rentalDetails.module.scss'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import SkeletonLoader from '../../SkeletonLoader';
import 'react-loading-skeleton/dist/skeleton.css';
import { client } from '../../../service/Service';
import { useParams } from 'react-router-dom';

interface Card {
    _type: string;
    slug: {
      current: string;
    };
    image: string;
    title: string;
    location: string;
    bedCount: string;
    size: string;
    price:string;
  }

const Tenants:React.FC = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [cards, setCards] = useState<Card | null>(null);
    const { rentSlug } = useParams<{ rentSlug: string }>();

  useEffect(() => {
    client
      .fetch(`*[ _type=="cards"]{
            ...,
            "categories":categories[]->status
        }`)
      .then((res:any) => {
        const thisMovies = res.find((rent: Card) => rent.slug.current === rentSlug);
        setCards(thisMovies);
      });
  }, [rentSlug]);
    useEffect(() => {

        const timer = setTimeout(() => {
          setShowSkeleton(false);
        }, 1500);
    
    
        return () => clearTimeout(timer);
      }, []); 
  return (
    <div className={styles.Tenants}>
        
        {
            showSkeleton ? (
            <SkeletonLoader width={299} height={300}/>):(
                <div className={styles.Tenants__contact}>
        <div className={styles.Tenants__contact__top}>
            <h4>Manuel Villa</h4> 
            <span>Tenants</span>  
        </div>
        <div className={styles.Tenants__contact__infoes}>
            <div className={styles.Tenants__contact__infoes__info}>
                <p>Move-in Date</p>
                <span>Dec 1, 2021</span>
            </div>
            <div className={styles.Tenants__contact__infoes__info}>
                <p>Contact</p>
                <span>(+1) 324-5329</span>
            </div>
            <div className={styles.Tenants__contact__infoes__info}>
                <p>Price per month</p>
                <span>{cards && cards.price}</span>
            </div>
        </div>
        <div className={styles.Tenants__contact__btn}>
                <button><HiOutlineEnvelope/> Send message</button>
        </div>
        </div>
            )
        }
        {
            showSkeleton ? (
            <SkeletonLoader width={299} height={150}/>):(
        <div className={styles.Tenants__collect}>
            <p>Rents collected this month:</p>
            <div className={styles.collectText}>
                <h4>83%</h4>
                <span>60 tenants</span>
            </div>
        </div>)}
    </div>
  )
}

export default Tenants