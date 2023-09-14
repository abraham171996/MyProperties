import React from 'react'
import img from '../../../assets/images/image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.png'
import img2 from '../../../assets/images/key.png'
import styles from '../../SummaryBanner/summary.module.scss'
const SummaryBannerLeft:React.FC = () => {
  return (
    
        <div className={styles.SummaryBanner__left}>
                <div className={styles.SummaryBanner__left__title}>
                    <h2>Application Summary</h2>
                </div>
                <div className={styles.SummaryBanner__left__init}>
                    <figure>
                        <img src="https://s3-alpha-sig.figma.com/img/3bc5/d3d4/eb73e01c9a4d802c2fefb8da4485a85d?Expires=1694995200&Signature=Dt7nxkjmDJOnRiCfQkl7aOycL96HIxrKDwnDA78eSEaYCqXIeU3nqQom0V7hb98gRsDZ45lRFF13-b9GNcpztbPDEPqnkPYgE3OcwG6yKJvFn7T27kXbJ4PX289WchkWzXeHY9xR~vKyqbYqPTAsE1byy-wDt6b0WRBctItZQgz195D~BXvcFq3ps6v5-e1H41FgtFPJSQkV699tpFUpY-NFQl~6dRm~-KdDIXklQGnTzA3c~NVWI0NfClUsqee2-sX9MAIuOTnqWIrq1yh4fISF8lmQhplxsY1MnfeYoyBUUXUzUzMZa2Z1v6HebNMPu7SclNBbtp8eUq1uSAS0DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </figure>
                    <div className={styles.SummaryBanner__left__init__right}>
                        <div className={styles.SummaryBanner__left__init__right__top}>
                            <div className={styles.SummaryBanner__left__init__right__top__text}>
                                <h3>Beverly Springfield</h3>
                                <span>210 US Highway, Highland Lake, FL</span>
                            </div>
                            <div className={styles.SummaryBanner__left__init__right__top__not}>
                                <p>Applied Dec 9 , 11:00 AM</p>
                            </div>
                        </div>
                        <div className={styles.SummaryBanner__left__init__right__bottom}>
                            <span>4 Beds</span>
                            <span>2 Bathrooms</span>
                            <span>6x7.5 m²</span>
                        </div>
                    </div>
                </div>
                <div className={styles.SummaryBanner__left__number}>
                    <div className={styles.SummaryBanner__left__number__top}>
                        <div className={styles.SummaryBanner__left__number__top__group}>
                            <span>Total Income</span>
                            <p>$4,500/mo</p>
                        </div>
                        <div className={styles.SummaryBanner__left__number__top__group}>
                            <span>Income to Rent</span>
                            <p>2.3X</p>
                        </div>
                        <div className={styles.SummaryBanner__left__number__top__group}>
                            <span>Occupants</span>
                            <p>$1 person</p>
                        </div>
                        <div className={styles.SummaryBanner__left__number__top__group}>
                            <span>Move-in Date</span>
                            <p>Dec 18, 2021</p>
                        </div>
                    </div>
                    <div className={styles.SummaryBanner__left__number__bottom}>
                        <span>Vehicles</span>
                        <p>Porsche 718 Cayman</p>
                    </div>
                </div>
                <div className={styles.SummaryBanner__left__center}>
                    <div className={styles.SummaryBanner__left__center__ref}>
                        <h4>Personal Reference</h4>
                        <span>“He always pay rent on time”</span>
                        <div className={styles.SummaryBanner__left__center__ref__bot}>
                            <figure>
                                <img src={img} alt="" />
                            </figure>
                            <div className={styles.Pername}>
                                <div className={styles.Pernames}>
                                    <p>Mario</p>
                                    <span>IDENTITY VERIFIED</span>
                                </div>
                                <div className={styles.perEmail}>
                                    <p>mariogarcia@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.SummaryBanner__left__center__app}>
                        <h4>Rental Application</h4>
                        <div className={styles.appMiddle}>
                            <figure><img src={img2} alt="" /></figure>
                            <div className={styles.midname}>
                                <p>Beverly Springfield</p>
                                <span>$4,500 monthly income</span>
                                <div className={styles.appBot}>
                                    <span>4</span>
                                    <span>2</span>
                                    <span>6x7.5 m²</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.SummaryBanner__left__bottom}>
                    <div className={styles.SummaryBanner__left__bottom__report}>
                        <h4>Background Report</h4>
                        <div className={styles.SummaryBanner__left__bottom__report__row}>
                            <h5>SSN Trace</h5>
                            <p>Clear</p>
                        </div>
                        <div className={styles.SummaryBanner__left__bottom__report__row}>
                            <h5>Eviction Search</h5>
                            <p>Clear</p>
                        </div>
                        <div className={styles.SummaryBanner__left__bottom__report__row}>
                            <h5>Sex Offender Search</h5>
                            <p>Clear</p>
                        </div>
                        <div className={styles.SummaryBanner__left__bottom__report__row}>
                            <h5>Global Watchlist Search</h5>
                            <p>Clear</p>
                        </div>
                        <div className={styles.SummaryBanner__left__bottom__report__row}>
                            <h5>National Criminal Search</h5>
                            <p>Clear</p>
                        </div>
                    </div>
                    <div className={styles.SummaryBanner__left__bottom__credit}>
                    <h4>Credit Report</h4>
                        <div className={styles.bars}>
                           
                            <div className={styles.barRed}>

                            </div>
                            <div className={styles.baryellow}>

                            </div>
                            <div className={styles.barlightGre}>

                            </div>
                            <div className={styles.barGreen}>

                            </div>
                            <div className={styles.bardarkGre}>

                            </div>
                        </div>
                        <div className={styles.stats}>
                            <h4>Report</h4>
                            <div className={styles.stats__left}>
                                <div className={styles.stats__left__stat}>
                                            <span>On-Time Payment</span>
                                            <p>100%</p>
                                </div>
                                <div className={styles.stats__left__stat}>
                                            <span>Credit Used</span>
                                            <p>32%</p>
                                </div>
                                
                            </div>
                            <div className={styles.stats__right}>
                                <div className={styles.stats__right__stat}>
                                <span>Est. Monthly Payments</span>
                                            <p>$1,346</p>
                                </div>
                                <div className={styles.stats__right__stat}>
                                <span>Total Debt</span>
                                            <p>$20,235</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default SummaryBannerLeft