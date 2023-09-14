// Properties.tsx
import React, { useEffect, useState } from 'react';
import styles from '../../RentalDetails/rentalDetails.module.scss';
import { BiFilter } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import 'react-loading-skeleton/dist/skeleton.css';
import { client } from '../../../service/Service';
import PropertyList from './PropertyList';
import SkeletonLoader from '../../SkeletonLoader';

const Properties: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    client.fetch(`*[ _type=="cards"]{
            ...,
            "categories":categories[]->status
        }`).then((res) => {
      setCards(res);
     
    });
  }, []);
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);


    return () => clearTimeout(timer);
  }, []); 
  useEffect(() => {
    const filtered = cards.filter((card: any) =>
      card.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchInput, cards]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.Properties}>
      <div className={styles.Properties__title}>
        {showSkeleton ? (
          <SkeletonLoader width={120} height={30} /> 
        ) : (
          <h4>Properties</h4>
        )}
        {showSkeleton ? (
          <SkeletonLoader width={30} height={30} /> 
        ) : (
          <BiFilter />
        )}
      </div>
      {showSkeleton ? (
        <SkeletonLoader style={{ marginTop: '16px',marginBottom:"20px", marginLeft: '20px' }} width={'90%'} height={56} /> // Use the SkeletonLoader component
      ) : (
        <div className={styles.Properties__input}>
          <CiSearch />
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
      )}
      {!showSkeleton && <PropertyList showSkeleton={showSkeleton} filteredCards={filteredCards} />}

    </div>
  );
};

export default Properties;
