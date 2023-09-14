import React from 'react'
import styles from '../../SummaryBanner/summary.module.scss'
import {BsCheck2,BsDot} from 'react-icons/bs'
import {IoCloseOutline} from 'react-icons/io5'
import image from '../../../assets/images/image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.png'
import {HiOutlineMail} from 'react-icons/hi'
const SummaryBannerRight:React.FC = () => {
  return (
    <div className={styles.SummaryBanner__right}>
        <div className={styles.SummaryBanner__right__btns}>
                <button className={styles.Accept}>
                    <BsCheck2/>
                    Accept
                </button>
                <button className={styles.Reject}>
                    <IoCloseOutline/>
                    Reject
                </button>
        </div>
        <div className={styles.SummaryBanner__right__card}>
            <div className={styles.SummaryBanner__right__card__top}>
                    <figure>
                        <img src={image} alt="" />
                        <h4>Manuel Villa</h4>
                        <span>Albany, NY</span>
                    </figure>
                    <div className={styles.SNN}>
                            <div className={styles.pas}>
                                        <span>518</span>
                            <div className={styles.dots}>
                                <BsDot/>
                                <BsDot/>
                                <BsDot/>
                                <BsDot/>
                                <BsDot/>
                            </div>
                            </div>
                            <p>
                            Show SSN
                            </p>
                    </div>
            </div>
            <div className={styles.SummaryBanner__right__card__center}>
                    <div className={styles.SummaryBanner__right__card__center__row}>
                        <span>Date of Birth</span>
                        <p>09-05-1985</p>
                    </div>
                    <div className={styles.SummaryBanner__right__card__center__row}>
                        <span>Age</span>
                        <p>36 years old</p>
                    </div>
                    <div className={styles.SummaryBanner__right__card__center__row}>
                        <span>Email</span>
                        <p>manuelvilla@gmail.com</p>
                    </div>
                    <div className={styles.SummaryBanner__right__card__center__row}>
                        <span>Phone Number</span>
                        <p>202-555-0159</p>
                    </div>
            </div>
            <div className={styles.SummaryBanner__right__card__btn}>
                <HiOutlineMail/>
                <button>
                    Email applicant
                </button>
            </div>
        </div>
    </div>
  )
}

export default SummaryBannerRight