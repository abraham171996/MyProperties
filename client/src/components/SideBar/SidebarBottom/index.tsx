import React from 'react';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../../SkeletonLoader';
import styles from '../../SideBar/sidebar.module.scss';
import home from '../../../assets/svg/home.svg'
import lamp from '../../../assets/svg/lamp.svg'
import letter from '../../../assets/svg/letter.svg'
import menu from '../../../assets/svg/menu.svg'
import money from '../../../assets/svg/money.svg'
import users from '../../../assets/svg/users.svg'

interface SidebarBottomProps {
    showSkeleton: boolean;
}
const SidebarBottom:React.FC<SidebarBottomProps> = ({ showSkeleton }) => {
    return (
        <div className={styles.sidebar__bottom}>
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <div className={styles.sidebar__bottom__icon}>
                                <img src={menu} alt="" />
                            </div>
                        )
                    }
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <Link to="/">
                                <div className={styles.sidebar__bottom__icon}>
                                    <img src={lamp} alt="" />
                                </div>
                            </Link>)}
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <Link to='/rentList/beverlyspringfield'>
                                <div className={styles.sidebar__bottom__icon}>
                                    <img src={home} alt="" />
                                </div>
                            </Link>
                        )}
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <Link to="/tenancyapplications">
                                    <div className={styles.sidebar__bottom__icon}>
                                <img src={users} alt="" />
                            </div>
                            </Link>
                            )}
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <div className={styles.sidebar__bottom__icon}>
                                <img src={money} alt="" />
                            </div>)}
                    {
                        showSkeleton ? (
                            <SkeletonLoader width={25} height={25} />
                        ) : (
                            <div className={styles.sidebar__bottom__icon}>
                                <img src={letter} alt="" />
                            </div>)}
                </div>
    );
};

export default SidebarBottom;
