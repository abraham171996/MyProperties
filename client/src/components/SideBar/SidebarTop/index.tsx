import React from 'react';
import { Link } from 'react-router-dom';
import { TbSmartHome } from 'react-icons/tb';
import SkeletonLoader from '../../SkeletonLoader';
import styles from '../../SideBar/sidebar.module.scss';

interface SidebarTopProps {
    showSkeleton: boolean;
}

const SidebarTop:React.FC<SidebarTopProps> = ({ showSkeleton }) => {
    return (
        <div className={styles.sidebar__top}>
            {showSkeleton ? (
                <SkeletonLoader height={30} />
            ) : (
                <Link to="/">
                    <div className={styles.simleHome}>
                        <TbSmartHome />
                    </div>
                </Link>
            )}
        </div>
    );
};

export default SidebarTop;
