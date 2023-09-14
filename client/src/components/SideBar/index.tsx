import React, { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './sidebar.module.scss'

import SidebarTop from './SidebarTop'
import SidebarBottom from './SidebarBottom';
import Additional from './Additional';
const SideBar: React.FC = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1500);


        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
                <SidebarTop showSkeleton={showSkeleton} />
                <SidebarBottom showSkeleton={showSkeleton}  />
            </div>
            <Additional showSkeleton={showSkeleton}/>
        </div>
    )
}

export default SideBar