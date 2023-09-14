import React from 'react'
import styles from '../TenancyBanner/tenancy.module.scss'
import TenancySearch from './TenancySearch'
import TenancyInfo from './TenancyInfo'
import TenancyTable from './TenancyTable'
import { DataProvider } from '../../context/DataContext'
import { SearchProvider } from '../../context/SearchContext'

const TenancyBanner:React.FC = () => {
  return (
    <DataProvider>
    <SearchProvider> {/* Wrap the TenancyBanner component with SearchProvider */}
      <div className={styles.TenancyBanner}>
        <div className={styles.TenancyBanner__left}>
          <TenancySearch />
          <TenancyTable />
        </div>
        <div className={styles.TenancyBanner__right}>
          <TenancyInfo />
        </div>
      </div>
    </SearchProvider>
  </DataProvider>
  )
}

export default TenancyBanner