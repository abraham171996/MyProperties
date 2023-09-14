import React, { useState } from 'react';
import SkeletonLoader from '../../SkeletonLoader';
import styles from '../../SideBar/sidebar.module.scss';



interface AdditionalProps {
    showSkeleton: boolean;
}


const Additional: React.FC<AdditionalProps> = ({ showSkeleton }) => {

    const [isClickedFirst, setIsClickedFirst] = useState<boolean>(false);
    const [isClickedSecond, setIsClickedSecond] = useState<boolean>(false);

    const toggleStrokeColorFirst = () => {
        setIsClickedFirst(!isClickedFirst);
        setIsClickedSecond(false)
    };

    const toggleStrokeColorSecond = () => {
        setIsClickedSecond(!isClickedSecond);
        setIsClickedFirst(false)
    };

    return (
        <div className={styles.additional}>
            {
                showSkeleton ? (
                    <SkeletonLoader width={25} height={25} />
                ) : (
                    <figure onClick={toggleStrokeColorFirst} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.4" clip-path="url(#clip0_29291_1697)">
                                <path d="M9.99935 18.3332C14.5827 18.3332 18.3327 14.5832 18.3327 9.99984C18.3327 5.4165 14.5827 1.6665 9.99935 1.6665C5.41602 1.6665 1.66602 5.4165 1.66602 9.99984C1.66602 14.5832 5.41602 18.3332 9.99935 18.3332Z" stroke={isClickedFirst ? '#7065f0' : '#100A55'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 7.70737C7.5 7.21039 7.73033 6.73376 8.14032 6.38234C8.55031 6.03092 9.10637 5.8335 9.68618 5.8335H10.3108C10.8906 5.8335 11.4467 6.03092 11.8567 6.38234C12.2667 6.73376 12.497 7.21039 12.497 7.70737C12.52 8.11291 12.4106 8.51494 12.1853 8.85291C11.96 9.19089 11.6309 9.44649 11.2477 9.58124C10.8646 9.7609 10.5355 10.1017 10.3102 10.5523C10.0849 11.003 9.9755 10.9144 9.9985 11.4551" stroke={isClickedFirst ? '#7065f0' : '#100A55'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.99805 14.5781V14.5844" stroke={isClickedFirst ? '#7065f0' : '#100A55'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_29291_1697">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </figure>)}
            {
                showSkeleton ? (
                    <SkeletonLoader width={25} height={25} />
                ) : (
                    <figure onClick={toggleStrokeColorSecond} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.4">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke={isClickedSecond ? '#7065f0' : '#100A55'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.66602 10.7334V9.2667C1.66602 8.40003 2.37435 7.68336 3.24935 7.68336C4.75768 7.68336 5.37435 6.6167 4.61602 5.30836C4.18268 4.55836 4.44102 3.58336 5.19935 3.15003L6.64102 2.32503C7.29935 1.93336 8.14935 2.1667 8.54102 2.82503L8.63268 2.98336C9.38268 4.2917 10.616 4.2917 11.3743 2.98336L11.466 2.82503C11.8577 2.1667 12.7077 1.93336 13.366 2.32503L14.8077 3.15003C15.566 3.58336 15.8243 4.55836 15.391 5.30836C14.6327 6.6167 15.2494 7.68336 16.7577 7.68336C17.6244 7.68336 18.341 8.3917 18.341 9.2667V10.7334C18.341 11.6 17.6327 12.3167 16.7577 12.3167C15.2494 12.3167 14.6327 13.3834 15.391 14.6917C15.8243 15.45 15.566 16.4167 14.8077 16.85L13.366 17.675C12.7077 18.0667 11.8577 17.8334 11.466 17.175L11.3743 17.0167C10.6243 15.7084 9.39102 15.7084 8.63268 17.0167L8.54102 17.175C8.14935 17.8334 7.29935 18.0667 6.64102 17.675L5.19935 16.85C4.44102 16.4167 4.18268 15.4417 4.61602 14.6917C5.37435 13.3834 4.75768 12.3167 3.24935 12.3167C2.37435 12.3167 1.66602 11.6 1.66602 10.7334Z" stroke={isClickedSecond ? '#7065f0' : '#100A55'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </figure>)}
        </div>
    );
};

export default Additional;