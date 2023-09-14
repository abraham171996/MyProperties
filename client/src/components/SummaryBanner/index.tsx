import React from 'react'
import styles from '../SummaryBanner/summary.module.scss'
import SummaryBannerLeft from './SummaryBannerLeft'
import SummaryBannerRight from './SummaryBannerRight'

const SummaryBanner: React.FC = () => {
    return (
        <div className={styles.SummaryBanner}>
            <SummaryBannerLeft/>
            <SummaryBannerRight/>
        </div>
    )
}

export default SummaryBanner