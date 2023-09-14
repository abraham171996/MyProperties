import React, { useEffect, useState } from 'react'
import styles from '../../../pages/Home/home.module.scss'
import { BiBath } from 'react-icons/bi'
import { LuBedSingle } from 'react-icons/lu'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import dimension from '../../../assets/svg/dimension.svg'
import { client, urlFor } from '../../../service/Service'
import SkeletonLoader from '../../SkeletonLoader'
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom'
const HomeCards: React.FC = () => {
    const [cards, setCards] = useState([]);
    const [showSkeleton, setShowSkeleton] = useState(true);
    useEffect(() => {
        client.fetch(`*[ _type=="cards"]{
            ...,
            "categories":categories[]->status
        }`).then((res) => {
            setCards(res)


        })
    }, [])
    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1500);


        return () => clearTimeout(timer);
    }, []);


    return (
        <div className={styles.HomeCards}>
            <div className={styles.HomeCards__cards}>
                {
                    cards && cards.map((card: any, index: number) => (
                        <Link key={index} to={`/rentList/${card.slug.current}`}>
                            <div  className={styles.HomeCards__cards__card}>
                            {
                                showSkeleton?(
                                    <SkeletonLoader height={200}/>
                                ):(
                                    <figure className={styles.bannerImage}>
                                <img src={`${urlFor(card.image)}`} alt="" />
                            </figure>
                                )
                            }
                            <div className={styles.HomeCards__cards__card__content}>
                                <div className={styles.HomeCards__cards__card__content__top}>
                                {
                                showSkeleton?(
                                    <SkeletonLoader width={130} height={30}/>
                                ):(
                                    <p>{card.price}<span>/month</span></p>)}
                                    {
                                        showSkeleton?(
                                            <SkeletonLoader width={100} height={30}/>
                                        ):(
                                            <div className={styles.status}>
                                        <p className={card.categories.map((e: any) => {
                                            if (e === 'ACTIVE') return styles.active;
                                            if (e === 'ARCHIVE') return styles.archive;
                                            return styles.maintenance;
                                        }).join(' ')}>{card.categories}</p>
                                        <HiOutlineDotsVertical />
                                    </div>
                                        )
                                    }
                                </div>
                                <div className={styles.HomeCards__cards__card__content__center}>
                                    {
                                        showSkeleton?(
                                            <SkeletonLoader style={{marginTop:"10px"}} baseColor='#000' width={200} height={30}/>
                                        ):(
                                            <h2>{card.title}</h2>
                                        )
                                    }
                                    {
                                        showSkeleton?(
                                            <SkeletonLoader baseColor='#000' width={200} height={20}/>
                                        ):(
                                    <span>{card.location}</span>)}
                                </div>
                             {
                                showSkeleton?(
                                    <SkeletonLoader style={{marginTop:"10px"}} width={"100%"} height={30}/>
                                ):(
                                    <div className={styles.HomeCards__cards__card__content__bottom}>
                                    <figure>
                                        <LuBedSingle />
                                        <span>{card.bedCount}</span>
                                    </figure>
                                    <figure>
                                        <BiBath />
                                        <span>{card.bathCount}</span>
                                    </figure>
                                    <figure>
                                        <img src={dimension} alt="" />
                                        <span>{card.size}</span>
                                    </figure>
                                </div>
                                )
                             }
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCards