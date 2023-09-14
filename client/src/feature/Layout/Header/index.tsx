import React, { useState, useEffect } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import styles from './header.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Header = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);


    return () => clearTimeout(timer);
  }, []); 

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
  
        {showSkeleton ? (
          <Skeleton width={150} height={30} />
        ) : (
          <h1>My Properties</h1>
        )}
      </div>
      <div className={styles.header__right}>
      {showSkeleton ? (
            <Skeleton width={50} height={30} style={{border:'none'}} />
            ):(
        <div className={styles.bell}>
            <HiOutlineBell />
        </div>
)}
        <div className={styles.person}>
          
          {showSkeleton ? (
            <Skeleton width={100} height={30} />
          ) : (
            <>
              <p>FR</p>
              <select name="person">
                <option value="Francis">Francis</option>
              </select>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
