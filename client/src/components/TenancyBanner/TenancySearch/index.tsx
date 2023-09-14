import React,{useState,useEffect} from 'react'
import styles from '../../TenancyBanner/tenancy.module.scss'
import {CiSearch} from 'react-icons/ci'
import {IoIosAdd} from 'react-icons/io'
import SkeletonLoader from '../../SkeletonLoader'
import 'react-loading-skeleton/dist/skeleton.css';
import { useSearchContext } from '../../../context/SearchContext'
import AddTenantModal from '../../Modal/AddTenantModal'
const TenancySearch:React.FC = () => {
  const { searchTerm, setSearch } = useSearchContext();
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);


    return () => clearTimeout(timer);
  }, []); 
  const handleSearchChange = (event:any) => {
    setSearch(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    
    <>
        {
            showSkeleton ? (<SkeletonLoader style={{margin:"10px"}} width={"100%"} height={48}/>):(
              <div className={styles.TenancyBanner__TenancySearch}>
            <div className={styles.TenancyBanner__TenancySearch__left}>
            <CiSearch/>
            <input type="text" placeholder='Search tenant by name...'   value={searchTerm}
              onChange={handleSearchChange} />
            </div>
            <div  className={styles.TenancyBanner__TenancySearch__right}>
            <p onClick={openModal}>Add tenants</p>
            <IoIosAdd onClick={openModal} />
                
            </div>
        </div>
            )
        }
        {isModalOpen && (
        <AddTenantModal onClose={closeModal} />
      )}
    </>
  )
}

export default TenancySearch