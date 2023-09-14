import React, { useEffect, useState } from 'react';
import styles from '../../RentalDetails/rentalDetails.module.scss';
import { client, urlFor } from '../../../service/Service';
import { useParams } from 'react-router-dom';
import { LuCalendarDays, LuBedSingle } from 'react-icons/lu';
import { TbSmartHome } from 'react-icons/tb';
import { RxDimensions } from 'react-icons/rx';
import { PiUsersThree } from 'react-icons/pi';
import { RiFileDownloadLine } from 'react-icons/ri';
import SkeletonLoader from '../../SkeletonLoader';
import 'react-loading-skeleton/dist/skeleton.css';
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
}

const RentalBanner: React.FC = () => {
  const [cards, setCards] = useState<Card | null>(null);
  const [showSkeleton, setShowSkeleton] = useState(true);
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
    <>
      {cards && (
        <div className={styles.RentalBanner}>
          {
            showSkeleton ? (
            <SkeletonLoader width={'62%'} height={"100%"}/>):(
              <figure>
            <img src={`${urlFor(cards.image)}`} alt="" />
          </figure>
            )
          }
          <div className={styles.RentalBanner_bottom}>
            <div className={styles.RentalBanner__content}>
              <div className={styles.RentalBanner__content__left}>
              {
            showSkeleton ? (
            <SkeletonLoader width={150} height={30}/>):(
                <h2>{cards.title}</h2>)}
{
            showSkeleton ? (
            <SkeletonLoader width={150} height={30}/>):(
                <span>{cards.location}</span>)}
              </div>
              <div className={styles.RentalBanner__content__right}>
                <div className={styles.calendar}>
                {
            showSkeleton ? (
            <SkeletonLoader width={250} height={30}/>):(
                  <>
                  <LuCalendarDays />
                  <span>Show Property Calendar</span>
                  </>
                  )}
                </div>
              </div>
            </div>
            {
            showSkeleton ? (
            <SkeletonLoader width={"100%"} height={100}/>):(
            <div className={styles.RentalBanner__info}>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Properties</p>
                </div>
                <figure>
                  <TbSmartHome />
                  <span>46</span>
                </figure>
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Rooms</p>
                </div>
                <figure>
                  <LuBedSingle />
                  <span>{cards.bedCount}</span>
                </figure>
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Living Space</p>
                </div>
                <figure>
                  <RxDimensions />
                  <span>{cards.size}</span>
                </figure>
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Year Built</p>
                </div>
                <figure>
                  <LuCalendarDays />
                  <span>2018</span>
                </figure>
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Tenants</p>
                </div>
                <figure>
                  <PiUsersThree />
                  <span>12</span>
                </figure>
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>Request</p>
                </div>
                <figure>
                  <RiFileDownloadLine />
                  <span>12</span>
                </figure>
              </div>
            </div>)}
          </div>
        </div>
      )}
    </>
  );
};

export default RentalBanner;
