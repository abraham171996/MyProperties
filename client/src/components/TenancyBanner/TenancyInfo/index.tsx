import React, { useEffect, useState } from 'react'
import styles from '../../TenancyBanner/tenancy.module.scss'
import icon2 from '../../../assets/svg/Icon (2).svg'
import icon from '../../../assets/svg/Icon.png'
import { useDataContext } from '../../../context/DataContext'
import { Link } from 'react-router-dom'
import SkeletonLoader from '../../SkeletonLoader'
import 'react-loading-skeleton/dist/skeleton.css';
const TenancyInfo: React.FC = () => {
  const { selectedData } = useDataContext()
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);


    return () => clearTimeout(timer);
  }, []);
  
  
  return (
    <>
      {
        showSkeleton ? (<SkeletonLoader width={408} height={496}/>) : (
          <div className={styles.TenancyBanner__right__info}>
            <div className={styles.TenancyBanner__right__info__title}>
              <h2>Tenant detail view</h2>
            </div>
            <div className={styles.TenancyBanner__right__info__card}>
              {
                selectedData && (
                  <>
                    <div className={styles.TenancyBanner__right__info__card__top}>
                      <figure>
                        <img src={selectedData.image} alt="" />
                      </figure>
                      <div className={styles.TenancyBanner__right__info__card__top__text}>
                        <h4>{selectedData.name}</h4>
                        <span>Tenants</span>
                      </div>
                    </div>
                    <div className={styles.TenancyBanner__right__info__card__center}>
                      <div className={styles.TenancyBanner__right__info__card__center__row}>
                        <span>Applied</span>
                        <p>{selectedData.date}</p>
                      </div>
                      <div className={styles.TenancyBanner__right__info__card__center__row}>
                        <span>Occupants</span>
                        <p>1 person</p>
                      </div>
                      <div className={styles.TenancyBanner__right__info__card__center__row}>
                        <span>Income</span>

                      </div>
                    </div>
                    <div className={styles.TenancyBanner__right__info__card__bottom}>
                      <div className={styles.TenancyBanner__right__info__card__bottom__row}>
                        <figure>
                          <img src={icon2} alt="" />
                          <span>Total Income</span>
                        </figure>
                        <p>${selectedData.price}/mo</p>
                      </div>
                      <div className={styles.TenancyBanner__right__info__card__bottom__row}>
                        <figure>
                          <img src={icon} alt="" />
                          <span>Income to Rent</span>
                        </figure>
                        <p>{selectedData.income}X</p>
                      </div>
                    </div>
                  </>
                )
              }
              <div className={styles.TenancyBanner__right__info__card__btn}>
                <Link to="/summary">
                  <button>
                    View Application
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default TenancyInfo