// PropertyList.tsx
import React from 'react';
import PropertyCard from './PropertyCard';
import styles from '../../../RentalDetails/rentalDetails.module.scss'
interface PropertyListProps {
    showSkeleton: boolean;  
  filteredCards: any[];
}

const PropertyList: React.FC<PropertyListProps> = ({ filteredCards ,showSkeleton}) => {
    
  return (
    <div className={styles.Properties__cards}>
      {filteredCards.map((card: any, index: number) => (
        <PropertyCard showSkeleton={showSkeleton} key={index} card={card} />
      ))}
    </div>
  );
};

export default PropertyList;
